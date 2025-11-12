function displayCurrentDateTime() {
    const now = new Date(); // Create a new Date object
    const dateTimeString = now.toLocaleString(); // Get the local date and time string
    document.getElementById("currentDateTime").textContent = dateTimeString; // Update the HTML element
  
    const lastModified = document.lastModified;
    document.getElementById(
      "lastModified"
    ).textContent = `Last Modification: ${lastModified}`;
  }
  
  // Call the function when the page loads
  displayCurrentDateTime();
  
  // Optionally, update the time every second
  setInterval(displayCurrentDateTime, 1000);

  // Define static variables from the HTML content
const temperature = 32; // in Celsius
const windSpeed = 8; // in km/h

// Write the function to calculate wind chill
const calculateWindChill = (temp, speed) => {
    // Formula for wind chill in Celsius
    return 13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16);
};

// Get the element to display the wind chill
const windChillElement = document.getElementById("windchill");

// Check if conditions for wind chill are met
if (temperature <= 10 && windSpeed > 4.8) {
    // Calculate and display the wind chill factor, rounded to one decimal place
    const windChill = calculateWindChill(temperature, windSpeed);
    windChillElement.textContent = windChill.toFixed(1) + "°C";
} else {
    // Display "N/A" if conditions are not met
    windChillElement.textContent = "N/A";
}