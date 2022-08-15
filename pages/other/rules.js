const box = document.querySelectorAll('.red-outline');
const rules = document.querySelectorAll('.hide-rules');

box.forEach(function showRules() {
    if (rules.style.display = none)
    rules.style.display = 'flex';
    else (rules.style.display = 'none')
})

box.addEventListener('click', showRules)