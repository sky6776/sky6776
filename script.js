window.addEventListener("load", function () {
    var loadingElement = document.getElementById("loading");
    var overlayElement = document.getElementById("overlay");

    setTimeout(function () {
        loadingElement.style.display = "none";
        overlayElement.style.display = "none";
        document.querySelector("main").style.display = "block";
    }, 3000);
});

window.addEventListener("load", function () {
    var loadingElement = document.getElementById("loading");
    var overlayElement = document.getElementById("overlay");
    var mainElement = document.querySelector("main");
    var darkModeButton = document.getElementById("dark-mode-toggle");

    setTimeout(function () {
        loadingElement.style.display = "none";
        overlayElement.style.display = "none";
        mainElement.style.display = "block";
    }, 3000);

    darkModeButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });
});

function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
}

const darkModeToggle = document.getElementById('dark-mode-toggle');
darkModeToggle.addEventListener('click', toggleDarkMode);
