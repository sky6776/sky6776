window.addEventListener("load", function () {
    var loadingElement = document.getElementById("loading");
    var overlayElement = document.getElementById("overlay");

    setTimeout(function () {
        loadingElement.style.display = "none";
        overlayElement.style.display = "none";
        document.querySelector("main").style.display = "block";
    }, 3000);

    var darkModeButton = document.getElementById("dark-mode-toggle");

    darkModeButton.addEventListener("click", function () {
        toggleDarkMode();
    });
});

function toggleDarkMode() {
    const body = document.body;
    const darkModeButton = document.getElementById('dark-mode-toggle');

    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        darkModeButton.textContent = 'ダーク';
        darkModeButton.style.backgroundColor = '#333';
        darkModeButton.style.color = '#fff';
    } else { 
        body.classList.add('dark-mode');
        darkModeButton.textContent = 'ライト';
        darkModeButton.style.backgroundColor = '#fff';
        darkModeButton.style.color = '#333';
    }
}

const darkModeToggle = document.getElementById('dark-mode-toggle');
darkModeToggle.addEventListener('click', toggleDarkMode);
