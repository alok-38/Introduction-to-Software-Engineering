$(document).ready(function () {
    // When the "Add" button is clicked
    $("button:first").click(function () {
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

    // When the "Remove" button is clicked
    $("#remove").click(function () {
        // Check if there are any li elements inside the ul
        if ($("#taskList li").length > 0) {
            // Remove the last li (task) from the ul
            $("#taskList li:last").remove();
        } else {
            // If there are no tasks to remove, show an alert
            alert("No tasks to remove.");
        }
    });
});
