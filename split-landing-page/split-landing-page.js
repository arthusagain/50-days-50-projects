const leftContainer = document.querySelector('.split-page__left');
const rightContainer = document.querySelector('.split-page__right');
const parentContainer = document.querySelector('.split-page__parent');

leftContainer.addEventListener('pointerenter', () =>{
    console.log('slide left');
    parentContainer.classList.add('split-page__hover--left');
})
leftContainer.addEventListener('pointerleave', () =>{
    console.log('remove left');
    parentContainer.classList.remove('split-page__hover--left');
})

rightContainer.addEventListener('pointerenter', () =>{
    console.log('slide right');
    parentContainer.classList.add('split-page__hover--right');
})
rightContainer.addEventListener('pointerleave', () =>{
    console.log('remove right');
    parentContainer.classList.remove('split-page__hover--right');
})