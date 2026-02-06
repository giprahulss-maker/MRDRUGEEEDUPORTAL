const searchBox = document.getElementById("searchBox");
const toggle = document.getElementById("themeToggle");

searchBox.addEventListener("keyup", () => {
    const query = searchBox.value.toLowerCase();
    document.querySelectorAll(".section").forEach(section => {
        section.style.display = section.innerText.toLowerCase().includes(query)
            ? "block"
            : "none";
    });
});

toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    toggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});
