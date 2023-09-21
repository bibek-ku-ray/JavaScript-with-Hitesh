const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNum = myNum.map((num) => {
//   return num + 10
// })
//console.log(newNum)


//chaining
const newNum1 = myNum
    .map((num) => num * 10)
    .map((num) => num + 5)
    .filter((num) => num >= 55)


console.log(newNum1);
