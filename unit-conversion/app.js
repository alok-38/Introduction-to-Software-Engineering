// Display the date on the footer
const date = new Date();
const spanEl = document.querySelector('span');

const formattedDate = date.toLocaleString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit"
});

spanEl.textContent = formattedDate;

const inputEl = document.querySelectorAll("input");


// Function to perform conversions
document.querySelector('button').addEventListener('click', () => {
    // Temperature conversion (Celsius to Fahrenheit)
    const tempInput = document.getElementById('temp').value;
    if (tempInput !== '') {
        const tempInCelsius = parseFloat(tempInput);
        const tempInFahrenheit = (tempInCelsius * 9 / 5) + 32;
        document.getElementById('temp-display').textContent = `${tempInCelsius}°C = ${tempInFahrenheit.toFixed(2)}°F`;
        document.getElementById('temp').value = ''; // Clear the input field
    } else {
        document.getElementById('temp-display').textContent = 'Please enter a temperature in °C.';
    }

    // Weight conversion (Kilograms to Pounds)
    const weightInput = document.getElementById('weight').value;
    if (weightInput !== '') {
        const weightInKg = parseFloat(weightInput);
        const weightInPounds = weightInKg * 2.20462;
        document.getElementById('weight-display').textContent = `${weightInKg} kg = ${weightInPounds.toFixed(2)} lbs`;
        document.getElementById('weight').value = ''; // Clear the input field
    } else {
        document.getElementById('weight-display').textContent = 'Please enter a weight in kg.';
    }

    // Distance conversion (Kilometers to Miles)
    const distanceInput = document.getElementById('distance').value;
    if (distanceInput !== '') {
        const distanceInKm = parseFloat(distanceInput);
        const distanceInMiles = distanceInKm * 0.621371;
        document.getElementById('distance-display').textContent = `${distanceInKm} km = ${distanceInMiles.toFixed(2)} miles`;
        document.getElementById('distance').value = ''; // Clear the input field
    } else {
        document.getElementById('distance-display').textContent = 'Please enter a distance in km.';
    }
});
