// Calculates the age (in years, months, and days) from the given date of birth (dob)
export const calculateAge = (dob) => {
  // Convert input date string into a Date object
  const birthDate = new Date(dob);
  const today = new Date();

  // Calculate initial year, month, and day difference
  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  // Adjust the day and month difference if the current day is less than birth day
  if (days < 0) {
    months--;
    // Add the number of days in the previous month to adjust the day count
    days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }

  // Adjust the year and month difference if the current month is less than birth month
  if (months < 0) {
    years--;
    months += 12;
  }

  // Return the age breakdown as an object
  return { years, months, days };
};
