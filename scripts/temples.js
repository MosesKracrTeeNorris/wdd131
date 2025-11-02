document.addEventListener('DOMContentLoaded', () => {
    const hamButton = document.querySelector('#menu');
    const navigation = document.querySelector('.navigation');
    const nameHeader = document.querySelector('.nameHeader'); // Select the h1 element

    hamButton.addEventListener('click', () => {
        navigation.classList.toggle('open');
        hamButton.classList.toggle('open');
        nameHeader.classList.toggle('hidden'); // Toggle the 'hidden' class
    });
});



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
  