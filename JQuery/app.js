$(document).ready(function () {
    $("#changeText").click(function () {
        if ($("#text").text() === "Hello, World!") {
            // If the text is "Hello, World!", change it
            $("#text").text("Text has been changed!");
            $("#text").css("background-color", "lightgreen");
        } else {
            // If it is not Hello, world
            $("#text").text("Hello, World!");
            $("#text").css("background-color", "lightcoral");
        }
    });
});