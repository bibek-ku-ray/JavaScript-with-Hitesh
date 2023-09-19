const user = {
    username: "bibek",
    price: 333,

    welcomeMessage: function () {
        console.log(`${this.username}, welcome to website`)
        console.log(this)
    }
}

// user.welcomeMessage()

// user.username = "sam"

// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "Kumar"
//     console.log(this.username);
// }

// chai()

// const chai = function(){
//     let username = "Bibke"
//     console.log(this.username);
// }
// chai()

//ARROW FUNCTION

const chai = () => {
    let username = "Bibke"
    console.log(this)
}

// chai()


//Basic arrow function (explicite return -> return keyword is used)
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

//Implecite return -> no need to write return 
//const addTwo = (num1, num2) => num1 + num2

//parenthesis also can be used
// const addTwo = (num1, num2) => (num1 + num2)


//returning object
const addTwo = (num1, num2) => ({user: "bibek"})


console.log(addTwo(15, 3))
