function myName(){
    console.log("B");
    console.log("i");
    console.log("b");
    console.log("e");
    console.log("k");
}

/**
 * NOTE:
 * myName -> reference
 * myName() -> execute
 */ 

// myName()

// function addTwoNumber(num1, num2){ //parameter
//     console.log(num1+num2);
// }

// addTwoNumber(5,6) //arguments
// addTwoNumber(3, "a")
// addTwoNumber(3, undefined)

function addTwoNumber1(num1, num2){ //parameter
    return num1+num2
}

// const result = addTwoNumber(5,2)

const result1 = addTwoNumber1(5,9)
// console.log("result",result1);
// console.log("Result ", addTwoNumber1(10,20));


//console.log("result ",result); //undefined

function loginUserMessage(username){
    if(!username){ //or username === undefined
        console.log("Please enter your name");
        return
    }
    return `${username}, you have logged in sucessfully!`
}

// console.log(loginUserMessage());



// ++++++++++++++++ function with objects +++++++++++++++++++++++++

function calCartPrice(...num1){
    return num1
}

console.log(calCartPrice(100,200,300,500));

const user = {
    name:"bibek",
    price: 200
}

function handleObject(anyObj) {
    console.log(`Name is ${anyObj.name} and the price is ${anyObj.price}` );
}

handleObject(user);

handleObject({ //passing object in the function
    name: "Ray",
    price: 500

})

const arr = [100,200,300,400]

function returnValue(getArr){
    return getArr[2]
}

console.log(returnValue(arr));