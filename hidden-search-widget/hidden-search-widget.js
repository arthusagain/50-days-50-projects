const searchContainer = document.querySelector('.search__container');
const searchButton = document.querySelector('.search__btn');

searchButton.addEventListener('click', () => {
    console.log(searchContainer.innerHTML)
    searchContainer.classList.toggle('active');
});

