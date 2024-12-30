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