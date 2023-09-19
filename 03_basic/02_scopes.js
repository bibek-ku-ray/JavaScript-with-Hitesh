if(true){
    let a = 10
    const b = 20
    var c = 30
}

//console.log(a);
// console.log(b);
// console.log(c); -> this can be access outside the curly bracket

// function one(){
//     const userName = "Bibek"

//     function two(){
//         const age = 21
//         console.log(userName);
//     }

//     console.log(age);
//     two()
// }

// one()

console.log(addOne(15)); //this can access function

function addOne(num){
    return num+1
}


console.log(addtwo(12)); 
/**
 * this cant be access function because function is assign to the variable which is declear after it call
 * In JavaScript, functions declared using the function keyword are hoisted to the top of their containing scope during the compilation phase.
 * This means that the function declaration itself is moved to the top of the scope,
 * allowing you to call the function before it's physically defined in your code. 
 * However, variables declared with var, let, or const are not hoisted in the same way.
 */
const addtwo = function(num){
    return num+2
}


