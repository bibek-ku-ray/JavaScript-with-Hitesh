const user = {
    username: "bibek",
    price: 333,

    welcomeMessage: function () {
        // console.log(`${this.username}, welcome to website`)
        // console.log(this)
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
    // console.log(this)
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


// console.log(addTwo(15, 3))




//***************************** Revision ******************/

const custInfo = {
    name: "John Cena",
    custId: 1225,

    greet: function(){
        console.log(`${this.name}, welcome to Website.`);
        console.log("\nthis1", this);
    }
    

}

//  

/*
    NOTE 
    this will reture empty object i.e {} because their is no global object
    but in brower this will return "window" because window is the global object in window
*/ 

custInfo.greet()
// custInfo.name = "Roman"
// custInfo.greet()
// console.log("\nthis3", this);


const arrowFun = (a, b, c) => {
    let username = "Deno"
    console.log(this.username);
    return a*b+c
}

console.log(arrowFun(5,2,8))