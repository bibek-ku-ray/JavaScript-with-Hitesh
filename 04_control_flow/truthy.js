const userMail = []

// if(userMail){
//     console.log("Got mail");
// } else {
//     console.log("Don't have mail");
// }

/**
 * NOTES:
 * it is assumed that the value will be true or false without checking any condition
 * 
 * falsy value -> false, 0, -0, BigInt 0n, "", NaN, undefined, null
 * truthy value -> "0", 'false', " ", [], {}, function(){} -> empty function
 */

// if (userMail.length === 0) {
//     console.log("array is empty");
// }

// const emptyObj = {}

// if(Object.keys(emptyObj).length === 0){
//     console.log("Object is empty");
// }


//++++++++++ Nullish Coalescing Operartor (??): null undefined +++++++++++
let val1;
// val1 = 5 ?? 10 // 10 will be assign
// val1 = null ?? 20 // if the value is null then 20 will be assign

// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15 // 10 will be assign because 10 is the first value that was found
val1 = null ?? undefined // undefined will be assigned

console.log(val1);


// +++++++++ Terniary Operator => condition ? true : false +++++++++++++++++++
const price = 10

price > 20 ? console.log("more than 20"): console.log("less than 20");


