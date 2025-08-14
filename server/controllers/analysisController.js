const { analyzeDocumentWithGemini } = require('../utils/geminiService');

const uploadAndAnalyze = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file was uploaded.' });
    }

    // Call the service to do the heavy lifting
    const analysisResult = await analyzeDocumentWithGemini(req.file);

    // Optionally, you could save the result to your database here
    // const newResult = new AnalysisResult(analysisResult);
    // await newResult.save();

    res.status(200).json(analysisResult);
  } catch (error) {
    console.error('Error in uploadAndAnalyze controller:', error);
    res.status(500).json({ message: error.message || 'An error occurred during analysis.' });
  }
};

module.exports = {
  uploadAndAnalyze,
};