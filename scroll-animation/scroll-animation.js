const boxes = document.querySelectorAll('.content__container');

window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes() {
    const triggerBottom = window.innerHeight / 6 * 5;

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;

        if(boxTop < triggerBottom) {
            box.classList.add('content__container--show');
        } else {
            box.classList.remove('content__container--show');
        }
    })
}