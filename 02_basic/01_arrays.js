const myArr = [0, 1, 2, 9, 8, 1, 3, 4, 5, 6]

const myArr2 = ["superman", "batman", "spiderman"]

//console.log(myArr)
myArr.push(20)
//console.log(myArr)

myArr.pop()
myArr.pop()
myArr.pop()
myArr.sort()
// console.log(myArr)
// console.log(myArr2)

myArr2.shift() //-> remove first element
myArr2.unshift("Bibek") //-> add element in array at first and shift all element right.
// console.log(myArr2)
// console.log(myArr.includes(4));


const myArr3 = myArr.join() //-> add all element of array to string
// console.log(myArr3);
// console.log(typeof myArr3); 


//SLICE AND SPLICE
const myarr5 = [1,2,3,4,5,6,7,8,9]
const myarr4 = myarr5.slice(1,5); // 2,3,4,5
console.log(myarr4); //return the copy selected array
console.log(myarr5); //after slice no change in orignal array happens

const myarr6 = myarr5.splice(1,5);
console.log(myarr6); //removes element 1 to 5 with index 5 included
console.log(myarr5);//after splice selected portion is removed





/**
 * NOTES:
 * JS make sallow copy whenever array-copies operation is done
 * sallow copy -> properties share the same reference
 * deep copy -> source and copy are completely independent (Doesnt share the same reference)
 */
