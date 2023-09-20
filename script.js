window.addEventListener("load", function () {
    var loadingElement = document.getElementById("loading");
    var overlayElement = document.getElementById("overlay");

    setTimeout(function () {
        loadingElement.style.display = "none";
        overlayElement.style.display = "none";
        document.querySelector("main").style.display = "block";
    }, 5000);
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
    }, 5000);

    darkModeButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });
});
