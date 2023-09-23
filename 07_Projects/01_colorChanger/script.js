const body = document.querySelector('body')
const buttons = document.querySelectorAll('.button')
const texts = document.querySelectorAll('.text')

buttons.forEach(function (button){
    button.addEventListener('click', function (e){
        switch (e.target.id) {
            case 'grey':
                body.style.backgroundColor = e.target.id;
                texts.forEach(function (text){
                    text.style.color = "white"
                })
                break;

            case 'white':
                body.style.backgroundColor = e.target.id;
                texts.forEach(function (text){
                    text.style.color = "blue"
                })
                break;

            case 'blue':
                body.style.backgroundColor = e.target.id;
                
                texts.forEach(function (text){
                    text.style.color = "yellow"
                })
                break;

            case 'yellow':
                body.style.backgroundColor = e.target.id;
                texts.forEach(function (text){
                    text.style.color = "grey"
                })
                break;
        
            default:
                break;
        }
    })
})