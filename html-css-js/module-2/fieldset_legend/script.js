// Select elements
const formEl = document.querySelector("form");
const submitButton = document.querySelector('input[type="submit"]');
const resetButton = document.querySelector('input[type="reset"]');
const allInputEl = document.querySelectorAll("input");  // Get all input elements

// Handle form submission
formEl.addEventListener('submit', (event) => {  // Handle form submission
    event.preventDefault();  // Prevent the form from submitting
    allInputEl.forEach(input => {
        console.log(`${input.name}: ${input.value}`);  // Log the value of each input element
    });
});

// Handle reset button click
resetButton.addEventListener('click', (event) => {
    // Loop through each input element and clear its value
    allInputEl.forEach(input => {
        input.value = "";  // Clear the value of each input
    });
    console.log('Form inputs have been reset!');
});
