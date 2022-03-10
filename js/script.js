// alert(`Make sure to fill all the inputs before pressing the "Evaluate" button`);

console.log('Script Loaded');

const gotMarks = document.getElementsByClassName('gotMarks');
const totalMarks = document.getElementsByClassName('tMarks');

const btn = document.querySelector('#evaluate');
const result = document.getElementById('result');


let ggmarks = [];
let ttmarks = [];

btn.addEventListener('click', ()=> {
    ggmarks = [];
    ttmarks = [];

    console.log('Btn clicked');

    let x = 0;

    for (const e of gotMarks) {
        ggmarks[x++] = parseInt(e.value);
    }
    
    x = 0;
    for (const e of totalMarks) {
        ttmarks[x++] = parseInt(e.value);
    }

    
    const percent = evaluate();



    if (check()) {
        result.innerHTML = percent;
    }
    else {
        alert('You left an empty block');
        alert('Fill it before evaluating!!');
    }
});


let sumgg = 0;
let sumtt = 0;

const evaluate = ()=> {

    sumgg = 0;
    sumtt = 0;

    ggmarks.forEach(e => {
        sumgg += e;
    });

    ttmarks.forEach(e => {
        sumtt += e;
    });

    console.log(sumgg);
    console.log(sumtt);

    if (sumtt  === 0 && sumgg !== 0) {
        alert('Total Marks cannot be zero...');
        return 0;
    }

    const percent = (sumgg * 100) / sumtt;

    console.log(percent);
    return percent;
}

const check = ()=>{
    console.log('Checking...');

    let final = true;

    ggmarks.forEach(e => {
        if (isNaN(e)) {
            console.log(e);
            final = false;
        }
    });

    ttmarks.forEach(e => {
        if (isNaN(e)) {
            console.log(e);
            final = false;
        }
    });


    return final;
};


