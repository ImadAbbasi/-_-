function validateAndCalculateAge() {
  const day = parseInt(document.getElementById("day").value);
  const month = parseInt(document.getElementById("month").value);
  const year = parseInt(document.getElementById("year").value);
  const today = new Date();
  const currentYear = today.getFullYear();

  let isValid = true;
  const dayInput = document.getElementById("day");
  const monthInput = document.getElementById("month");
  const yearInput = document.getElementById("year");

  // Clear previous errors
  dayInput.classList.remove("error");
  monthInput.classList.remove("error");
  yearInput.classList.remove("error");
  document.getElementById("result").innerText = "";

  // Validate day
  if (isNaN(day) || day < 1 || day > 31) {
    isValid = false;
    dayInput.classList.add("error");
  }

  // Validate month
  if (isNaN(month) || month < 1 || month > 12) {
    isValid = false;
    monthInput.classList.add("error");
  }

  // Validate year
  if (isNaN(year) || year > currentYear || year < 1900) {
    isValid = false;
    yearInput.classList.add("error");
  }

  if (!isValid) {
    alert("Please enter a valid date.");
    return;
  }

  calculateAge(day, month, year);
}

function calculateAge(day, month, year) {
  const today = new Date();
  const birthDate = new Date(year, month - 1, day); // Months are 0-based in JavaScript
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  document.getElementById("result").innerText = `You are ${age} years old.`;
}
