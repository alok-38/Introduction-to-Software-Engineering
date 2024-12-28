const amountEl = document.getElementById('amount');
const rateEl = document.getElementById('rate');
const durationEl = document.getElementById('duration');
const resultEl = document.getElementById('interest-value');
const formEl = document.getElementById('interest-form');

function computeInterest(e) {
    e.preventDefault();

    // Get the values from the input fields
    let inputAmount = parseFloat(amountEl.value);
    let inputRate = parseFloat(rateEl.value);
    let inputDuration = parseFloat(durationEl.value);

    // Validate the inputs
    if (isNaN(inputAmount) || isNaN(inputRate) || isNaN(inputDuration)) {
        alert("Please fill in all fields with valid numbers.");
        return;
    }

    // Calculate the Simple Interest
    let simpleInterest = (inputAmount * inputRate * inputDuration) / 100;

    // Update the result on the page
    resultEl.innerText = simpleInterest.toFixed(2);
}

// Attach event listener to the form submission
formEl.addEventListener('submit', computeInterest);
