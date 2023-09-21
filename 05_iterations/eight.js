const arr = [1, 2, 3, 4, 5, 6]

// const initialValue = 0

// const myTotal = arr.reduce(function (acc, currVal) {
//     console.log(`arr:${acc} and currVal: ${currVal}`);
//     return acc + currVal
// }, initialValue)

// console.log(myTotal)

// const myTotal2 = arr.reduce((acc, curr) => (acc + curr), 0)
// console.log(myTotal2);


const course = [
    {
        courseName: "JS course",
        price: 2999
    },
    {
        courseName: "Java course",
        price: 4999
    },
    {
        courseName: "Python course",
        price: 1999
    },
    {
        courseName: "Mobile course",
        price: 9999
    },
]

const totalPrice = course.reduce((acc, item) => (acc + item.price), 0)
console.log(totalPrice);