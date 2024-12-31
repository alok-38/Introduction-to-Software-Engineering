const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const submitButton = document.querySelector('button[type="submit"]');
const form = document.querySelector('form');  // Add reference to the form

function checkData(event) {
    // Check if name field is empty
    if (nameInput.value === "") {
        alert("Please enter the name");
        nameInput.focus();
        // Prevent form submission
        event.preventDefault();
        return; // Stop further checks
    }

    // Check if email field is empty
    if (emailInput.value === "") {
        alert("Please enter the email");
        emailInput.focus();
        // Prevent form submission
        event.preventDefault();
        return; // Stop further checks
    }
}

// Attach event listener to form submit
form.addEventListener('submit', checkData);
