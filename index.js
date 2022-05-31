const cardTouch = document.querySelectorAll('.pokemon-card');
// const cardImage = document.querySelectorAll('.pok-card-small');
const darkBackground = document.querySelector('.behind-large-card');

cardTouch.forEach(card => {
    card.addEventListener('click', () => {
        card.querySelector('.pok-card-small').classList.add('large-card');
        darkBackground.style.display = 'block';
        if (card.querySelector('.pok-card-small').classList.contains('large-card')) {
            darkBackground.addEventListener('click', () => {
                card.querySelector('.pok-card-small').classList.remove('large-card');
                darkBackground.style.display = 'none';
            })
        }
    })
});
