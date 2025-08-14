const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/db');

// Import routes
const analysisRoutes = require('./routes/api/analysis');

// Initialize the app
const app = express();

// Connect to Database
connectDB();

// --- Middleware ---
// Enable Cross-Origin Resource Sharing (CORS)
// This allows your React client (on a different port) to talk to this server
app.use(cors());

// Body-parser middleware to parse JSON request bodies
app.use(express.json());

// --- API Routes ---
// All routes related to analysis will be prefixed with /api/analysis
app.use('/api/analysis', analysisRoutes);

// Define the port
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));