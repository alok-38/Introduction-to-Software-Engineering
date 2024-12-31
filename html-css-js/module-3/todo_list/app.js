const inputEl = document.querySelector("input");
const ulEl = document.querySelector("ul");
const buttonEl = document.querySelector("button");

const addTasks = () => {
    let taskInput = inputEl.value;
    let liEl = document.createElement("li");
    liEl.textContent = taskInput;
    ulEl.appendChild(liEl);
    inputEl.value = "";
}

buttonEl.addEventListener('click', addTasks);