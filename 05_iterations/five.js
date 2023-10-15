const coding = ["Cpp", "java", "c", "javascript", "ruby"]

/**
 * because it is call back function it doesnt have name
 * value of array automatically goes to the function as argument i.e in val.
 */

// coding.forEach(function (val)  {
//     console.log(val);
// })


// coding.forEach(function (val)  {
//     console.log(val);
// })

// coding.forEach( () => {
//     console.log(coding[key]);
//     }
// )


//arrow function
// coding.forEach((item) => {
//     console.log(item);
// })

//another way -> function can also be passed 
// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// }) 

const language = [
    {
        languageName: "Javascipt",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "ruby",
        languageFileName: "rb"
    }
]

language.forEach((item)=>{
    console.log(item.languageName);
})

console.log();

language.forEach((item) => {
    console.log(item.languageFileName);
})

console.log();

language.forEach((item) => {
    console.log(item);
})



