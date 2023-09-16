console.log("02" > 1);


console.log(null > 0); // false -> 0 > 0
console.log(null == 0); // false
console.log(null >= 0); // true -> 0 >= 0
/**
 * NOTE:
 * The reason is that an equality check == and comparions >< >= <= work differently.
 * Comparisons convert null to a number, treating it as 0.
 * So, null >= 0 is true and null > 0 is false.
 */

//these type of code should be avoided.

console.log(undefined > 0); //false
console.log(undefined == 0); //false
console.log(undefined >= 0); //false

//STRICT CHECK -> this check datatype
console.log("strict " +("2" === 2));