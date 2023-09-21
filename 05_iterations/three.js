//for of

// ["", "", ""]
// [({}, {}, {})]

// const arr = [1, 2, 3, 4, 5, 6]

// for (const num of arr) {
//     console.log(num);
// }


// const greets = "Hello World!"

// for (const greet of greets) {
//     console.log(`Each char oof ${greet}`);
// }


//map -> hold key value pair, it contain unique value and stay in same order as we enter.

// const map = new Map()
// map.set('IN', "India")
// map.set('NP', "Nepal")
// map.set('FR', "France")

// console.log(map);

// for (const [key, value] of map) {
//     console.log(key, ":-", value);
// }

const myObj = {
    game1: "Cricket",
    game2: "Football"
}

for (const [key, value] of myObj) {
    console.log(key, ":-", value);
}