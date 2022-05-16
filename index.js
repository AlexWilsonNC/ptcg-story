const cardTouch = document.querySelector('.pokemon-card');
const cardImage = document.querySelector('.pok-card-small');
const darkBackground = document.querySelector('.behind-large-card');

cardTouch.addEventListener('click', () => {
    cardImage.classList.add('large-card');
    darkBackground.style.display = 'block';
    if (cardImage.classList.contains('large-card')) {
        darkBackground.addEventListener('click', () => {
            cardImage.classList.remove('large-card');
            darkBackground.style.display = 'none';
        })
    }
});


