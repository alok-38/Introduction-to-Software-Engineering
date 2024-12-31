const inputEl = document.querySelector("input");
const ulEl = document.querySelector("ul");
const addButtonEl = document.querySelector(".add-btn");
const removeButtonEl = document.querySelector(".remove-btn");

const addTasks = () => {
    let taskInput = inputEl.value;
    let liEl = document.createElement("li");
    liEl.textContent = taskInput;
    ulEl.appendChild(liEl);
    inputEl.value = "";
}

addButtonEl.addEventListener('click', addTasks);

const removeTasks = () => {
    const lastTask = ulEl.querySelector("li:last-child");
    if (lastTask) {
        ulEl.removeChild(lastTask);
    }
}

removeButtonEl.addEventListener('click', removeTasks);