const boxes = document.querySelectorAll('.content__container');

window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes() {
    const triggerTop = window.innerHeight / 6;
    const triggerBottom = triggerTop * 5;

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        const boxBottom = box.getBoundingClientRect().bottom;

        if(boxTop < triggerBottom && boxBottom > triggerTop) {
            box.classList.add('content__container--show');
        } else {
            box.classList.remove('content__container--show');
        }
    })
}