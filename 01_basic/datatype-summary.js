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
const anotherId = Symbol('123') //datatype:symbol

//console.log(id === anotherId);

const bigNumber = 1235455557896541338n; //n at last makes it bigInt type //datatype:bigint

//array
const fruits = ["orange", "mango"] //datatype:object

//objects -> store value in key-value pair
let obj = {
    name: "bibek",
    age: 21
}

//function
function greet(){ //datatype: function
    console.log("Namaste!");
}

//greet()

const value = null; //datatype: object

// console.log("function "+typeof greet);
// console.log("symbol "+typeof id);
// console.log("bigInt "+typeof bigNumber);
// console.log("object "+typeof obj);
// console.log("array "+typeof fruits);
// console.log("null "+typeof value);




//++++++++++++++ MEMORY +++++++++++++++++++++
/**
 * stack -> primitive 
 * (we get copy of value, so change in one value wont reflect in another)
 * 
 * heap -> used by non-primitive type data type 
 * (change in one place will reflect in another too, because reference is at same place or value)
 */