// Import necessary modules
import express from 'express';          // Web framework for building APIs
import cors from 'cors';                // Middleware to enable Cross-Origin Resource Sharing
import dotenv from 'dotenv';            // Loads environment variables from a .env file

// Import route handlers
import ageRoutes from './routes/ageRoutes.js'; // Age-related API routes

// Initialize environment variables
dotenv.config();

// Create an Express application instance
const app = express();

// Enable CORS to allow cross-origin requests (important for frontend-backend communication)
app.use(cors());

// Middleware to parse incoming JSON request bodies
app.use(express.json());

// Mount age-related routes at the /api/age path
app.use('/api/age', ageRoutes);

app.get('/', (req,res) =>{
res.send('Age calculator Backend Server is running live.');
});

// Define the port from environment or default to 5000
const PORT = process.env.PORT ;

// Start the server and listen on the defined port
app.listen(PORT, () => console.log(` Server running on port ${PORT}`));
