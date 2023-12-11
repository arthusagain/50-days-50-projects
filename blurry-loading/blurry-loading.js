const loadText = document.querySelector('.blurry__text')
const bg = document.querySelector('.blurry__background')


let load = 0;

let int = setInterval(blurring, 100);

function blurring() {
    load++;
  
    if (load > 99) {
      clearInterval(int)
    }
  
    loadText.innerText = `${load}%`;
    loadText.style.opacity = scale(load, 0, 100, 1, 0);
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`

    shouldLoad = LOAD_DURATION_MULTIPLIER-1;
}

// arthusagain: I also made this funciont more verbose to make sure I understood what was going on
// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  }
