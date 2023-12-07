const cardList = document.querySelectorAll('.expanding-cards__card');

cardList.forEach(card => {
    card.addEventListener('click', () => {
        const activeCard = document.querySelector('.active');
        if (activeCard === card) {
            return;
        }
        activeCard.classList.remove('active');
        card.classList.add('active');
    })
});