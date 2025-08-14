const express = require('express');
const multer = require('multer');
const { uploadAndAnalyze } = require('../../controllers/analysisController');

const router = express.Router();

// Configure multer for in-memory file storage
const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10 MB file size limit
});

// Define the POST route for file uploads
// The 'document' string must match the key in the FormData on the client side
router.post('/upload', upload.single('document'), uploadAndAnalyze);

module.exports = router;