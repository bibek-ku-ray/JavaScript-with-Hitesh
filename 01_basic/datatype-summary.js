/**
 * Offically datatype are catagortized into 2 type (premitive and non-primitive)
 * based on how data are stored and how can it be retrive from memory. 
 * 
 * PRIMITIVE -> CALL BY VALUE i.e value is copied
 * 7 types: String, Number, Boolean, null (empty), undefined (not assigned),Symbol, BigInt
 * 
 * NON-PRIMITIVE -> CALL BY REFERENCE
 * 3 types: array, functions, objects
 * 
 * JS is dynamically typed because we dont have to defined what kind data is gonna be stored in the variable
 * 
 */

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 1235455557896541338n; //n at last makes it bigInt type

//array
const fruits = ["orange", "mango"]

//objects -> store value in key-value pair
let obj = {
    name: "bibek",
    age: 21
}

//function
function greet(){ //datatype: function
    console.log("Namaste!");
}

greet()
console.log(typeof greet);
