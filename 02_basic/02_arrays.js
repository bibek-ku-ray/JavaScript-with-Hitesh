const fruit = ["orange", "mango"]

const vege = ["patato", "tamato"]
const numbers = [1, 2, 3]

//  fruit.push(vege)
//  console.log(fruit);

//  const array1 = fruit.concat(vege, numbers) //->concat return new array
//  console.log(array1);

const allArr = [...fruit, ...numbers, ...vege]
console.log(allArr)
/**
 * NOTES
 * spread is mustly used to concatinate
 * spread(...) => it spread arrays into single values
 */

const array2 = [1, 2, [5, 4], 5, [7, 8, [9, 1]]]
const newArray2 = array2.flat(Infinity)

console.log("new array2::",newArray2)

/**
 * flat -> return a new array by converting original array into new subarray.
 */

console.log(Array.isArray(array2)) //check the array

console.log(Array.from("Bibek Ray")) //it create array from iterable object

let score1 = 100
let score2 = 300
let score3 = 500

console.log(Array.of(score1, score2, score3)) //return array set of element
