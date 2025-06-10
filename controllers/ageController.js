// Import utility function to calculate age breakdown
import { calculateAge } from '../utils/calculateAge.js';

// Import configured Supabase client for DB operations
import { supabase } from '../config/supabaseClient.js';

// Controller to handle POST /api/age request
export const calculateAgeHandler = async (req, res) => {
  const { dob } = req.body;

  // Debug log: user's date of birth
  console.log('Date of birth of user is:', dob);

  // Input validation: ensure DOB is provided
  if (!dob) return res.status(400).json({ error: 'Date of birth required' });

  // Calculate the age in years, months, and days
  const result = calculateAge(dob);

  // Get day of the week from DOB (e.g., Monday, Tuesday)
  const birthDate = new Date(dob);
  const weekday = birthDate.toLocaleDateString('en-US', { weekday: 'long' });

  // Debug log: weekday of the DOB
  console.log('Weekday:', weekday);

  // Save the calculation result to Supabase (optional logging/storage)
  await supabase.from('calculations').insert([
    {
      dob,
      years: result.years,
      months: result.months,
      days: result.days,
    },
  ]);

  // Respond with the full result and additional weekday info
  res.json({
    ...result,
    dayOfWeek: weekday,
  });
};
