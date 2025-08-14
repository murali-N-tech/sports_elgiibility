import axios from 'axios';

// The base URL of your backend server
const API_URL = 'https://sports-elgiibility.onrender.com';

/**
 * Uploads a document for analysis.
 * @param {File} file The file to be uploaded.
 * @param {Function} onUploadProgress A callback function to track upload progress.
 * @returns {Promise<Object>} The analysis result from the server.
 */
export const uploadAndAnalyzeDocument = async (file, onUploadProgress) => {
  const formData = new FormData();
  formData.append('document', file); // 'document' must match the key in the backend multer setup

  try {
    const response = await axios.post(`${API_URL}/upload`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      onUploadProgress,
    });
    return response.data;
  } catch (error) {
    // Re-throw a more user-friendly error message
    throw new Error(error.response?.data?.message || 'An unexpected error occurred.');
  }
};
