// Import express framework
import express from 'express';

// Import controller that handles age calculation logic
import { calculateAgeHandler } from '../controllers/ageController.js';

// Initialize express router instance
const ageRoutes = express.Router();

// Define POST route for age calculation
// Endpoint: /api/age
// Expects request body: { dob: "YYYY-MM-DD" }
ageRoutes.post('/', calculateAgeHandler);

// Export routes to be used in the main server
export default ageRoutes;
