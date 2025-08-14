const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();
const pdf = require('pdf-parse');

// Initialize Gemini AI client
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const analyzeDocumentWithGemini = async (file) => {
  if (!file) {
    throw new Error('No file provided for analysis.');
  }

  // --- UPDATE 1: Correct model name ---
  const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash-latest' });

  // This is the detailed prompt telling Gemini exactly what to do.
  const prompt = `
    Analyze the provided sports medical or training document. Based on the data (like heart rate, HRV, training consistency, load metrics, and recovery scores), determine if the person is eligible for a high-intensity competition.

    You must provide your response ONLY in a valid JSON format. Do not include any text, code block markers, or explanations outside of the JSON object. The JSON object must have the following structure:
    {
      "isEligible": boolean,
      "eligibilityPercentage": number,
      "summary": "string",
      "chartData": [
        {"name": "string", "value": number},
        {"name": "string", "value": number}
      ]
    }

    - "isEligible": should be true or false.
    - "eligibilityPercentage": a score from 0 to 100. If not eligible, this should be below 50.
    - "summary": a brief, one-sentence explanation of the eligibility decision.
    - "chartData": an array of at least 3 key performance metrics you found in the document and their corresponding scores (0-100). Examples: "Consistency", "Recovery", "Training Load", "HRV Score".
  `;

  let generativeParts;

  // Prepare the content parts based on file type (PDF or Image)
  if (file.mimetype === 'application/pdf') {
    const data = await pdf(file.buffer);
    const textContent = data.text;
    generativeParts = [{ text: textContent }, { text: prompt }];
  } else if (file.mimetype.startsWith('image/')) {
    generativeParts = [
      { inlineData: { mimeType: file.mimetype, data: file.buffer.toString('base64') } },
      { text: prompt },
    ];
  } else {
    throw new Error('Unsupported file type. Please upload a PDF or an image.');
  }

  const result = await model.generateContent({ contents: [{ parts: generativeParts }] });
  const responseText = result.response.text();

  // --- UPDATE 2: Clean the response before parsing ---
  try {
    // Clean the response to remove markdown fences (```json and ```)
    const cleanedResponse = responseText.replace(/```json|```/g, '').trim();
    
    // Parse the cleaned JSON string into an object
    return JSON.parse(cleanedResponse);
  } catch (error) {
    console.error('Error parsing JSON from Gemini:', responseText);
    throw new Error('Failed to get a valid analysis from the AI model.');
  }
};

module.exports = { analyzeDocumentWithGemini };