 const form = document.querySelector('form')

// this usecase will give us empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `Please give valid height: ${height}`;
    }

    else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please give valid weight: ${weight}`;
    }

    else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2)

        if(bmi > 0 && bmi < 18.6){
            results.innerHTML = `<br><span>${bmi}</span> <br> Underweight`
        }
        else if(bmi >= 18.6 && bmi < 24.9){
            results.innerHTML = `<p><br><span>${bmi}</span> <br> Normal weight</p>`
            results.querySelector('p').style.color = 'green'
        }
        else{
            results.innerHTML = `<br><span>${bmi}</span> <br> Overweight`
        }
    }


});