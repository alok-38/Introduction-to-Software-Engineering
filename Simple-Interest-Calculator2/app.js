const rateEl = document.getElementById('rate');
const spanEl = document.querySelector('span');
const buttonEl = document.querySelector('button');
const amountEl = document.getElementById('amount');
const yearsEl = document.getElementById('years');
const interestEl = document.getElementById('interest');

// Function to update the displayed value of the rate
const updateRateDisplay = () => {
    spanEl.textContent = rateEl.value;
    spanEl.style.marginLeft = "15px";
}

// Event listener for the range slider to update the value dynamically
rateEl.addEventListener('input', updateRateDisplay);

// Function to compute and display the interest
const computeInterest = (e) => {
    e.preventDefault();

    // Retrieve and convert input values
    const amount = parseFloat(amountEl.value);
    const years = parseInt(yearsEl.value);
    const rate = parseFloat(rateEl.value);

    // Validate inputs
    if (isNaN(amount) || isNaN(years) || isNaN(rate)) {
        alert("Please enter valid numbers for amount, years, and rate.");
        return;
    }

    // Calculate Simple Interest (SI)
    const SI = (amount * rate * years) / 100;

    // Display the calculated interest
    interestEl.textContent = `Interest: ${SI.toFixed(2)}`;
}

buttonEl.addEventListener('click', computeInterest);
