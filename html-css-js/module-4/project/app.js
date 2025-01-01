// Get elements from the DOM
const inputEl = document.querySelector("input");
const textAreaEl = document.querySelector("textarea");
const buttonEl = document.querySelector("button");
const formEl = document.querySelector("form");

// Event listener for form submission
formEl.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevents the default form submission

    // Get the input values
    const textInput = inputEl.value;
    const messageInput = textAreaEl.value;

    // Get the popup message element
    const popupMessage = document.getElementById('popupMessage');

    // Set the popup message content
    popupMessage.textContent = 'Message submitted successfully!';

    // Show the popup message by adding the 'show' class
    popupMessage.classList.add('show');

    // Optionally, hide the popup message after 3 seconds (auto-dismiss)
    setTimeout(function () {
        popupMessage.classList.remove('show');
    }, 3000);

    // Optionally, clear the form fields after submission
    inputEl.value = '';
    textAreaEl.value = '';
});
