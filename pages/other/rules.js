const box = document.querySelector('.dark-blue-bg');
const rules = document.querySelector('.hide-rules');

box.onclick = function showRules() {
    if (rules.style.display === "none") {
        rules.style.display = "flex";
    } else {
        rules.style.display = "none";
    }
}

// box.addEventListener('click', showRules)