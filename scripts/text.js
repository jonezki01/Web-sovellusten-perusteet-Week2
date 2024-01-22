var texts = ["Hello, you there?", "Have an", "Awesome day! :)"];
var currentIndex = 0;

var button = document.getElementById("button");
var paragraph = document.getElementById("p");

button.addEventListener("click", function() {
    paragraph.textContent = texts[currentIndex];
    currentIndex = (currentIndex + 1) % texts.length;
});