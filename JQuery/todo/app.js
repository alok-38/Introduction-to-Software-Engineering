$(document).ready(function () {
    // When the button is clicked
    $("button").click(function () {
        var taskText = $("#taskInput").val(); // Get the value from the input field

        // Check if the input is not empty
        if (taskText.trim() !== "") {
            // Create a new li element and set its text
            var newTask = $("<li>").text(taskText);

            // Append the new li to the ul
            $("#taskList").append(newTask);

            // Clear the input field after adding the task
            $("#taskInput").val("");
        } else {
            alert("Please enter a task.");
        }
    });
});