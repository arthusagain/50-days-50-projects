let currentProgress = 0;
const taskSteps = document.querySelectorAll('.progress__milestone');
const progressBar = document.querySelector('.progress__bar');
const buttonPrev = document.querySelector('#previous');
const buttonNext = document.querySelector('#next');
const totalSteps = taskSteps.length;

function NextStep(){
};


function UpdateProgressBar(){
    for(let i=0;i<totalSteps;i++)
    {
        if(i>currentProgress){
            taskSteps[i].classList.remove('progress__milestone--active');
        }
        else{
            taskSteps[i].classList.add('progress__milestone--active');
        }
    }
    let barWidth =(currentProgress/(totalSteps-1))*100;
    progressBar.style.width = barWidth.toString()+'%';



    if (currentProgress <= 0){
        buttonPrev.disabled = true;
    }
    else{
        buttonPrev.disabled = false;
    }
    
    if (currentProgress >= (totalSteps-1)){
        buttonNext.disabled = true;
    }
    else{
        buttonNext.disabled = false;
    }
};
UpdateProgressBar();

buttonPrev.addEventListener('click', ()=>{
    console.log('progress--');
    if(currentProgress >0)
    {
        currentProgress--;
        UpdateProgressBar();
    }
});

buttonNext.addEventListener('click', () =>{
    console.log('progress++');
    if(currentProgress <totalSteps)
    {
        currentProgress++;
        UpdateProgressBar();
    }
});