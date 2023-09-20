window.addEventListener("load", function () {
    var loadingElement = document.getElementById("loading");
    var overlayElement = document.getElementById("overlay");

    setTimeout(function () {
        loadingElement.style.display = "none";
        overlayElement.style.display = "none";
        document.querySelector("main").style.display = "block";
    }, 5000);
});
