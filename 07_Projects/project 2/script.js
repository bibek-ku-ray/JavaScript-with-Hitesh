const form = document.querySelector('form');

form.addEventListener('submit', function(e){
    e.preventDefault();

    const wt = parseInt(document.querySelector('#weight').value)
    const ht = parseInt(document.querySelector('#height').value)
    const result = document.querySelector('.result')

    if(wt < 0 || wt === '' || isNaN(wt)){
        result.innerHTML = 'Invalid weight, enter the number';
    }

    else if(ht < 0 || ht === '' || isNaN(ht)){
        result.innerHTML = 'Invalid height, enter the number';
    }

    else{
        const bmi = (wt / ((ht*ht)/10000)).toFixed(3);
        result.innerHTML = `Your BMI is ${bmi}`
    }
})