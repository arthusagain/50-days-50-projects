const mainContainer = document.querySelector('.container');
const openButton = document.querySelector('#open');
const closeButton = document.querySelector('#close');

openButton.addEventListener('click', ()=>{
    mainContainer.classList.add('show-nav');
}
);

closeButton.addEventListener('click', ()=>{
    mainContainer.classList.remove('show-nav');
}
);
