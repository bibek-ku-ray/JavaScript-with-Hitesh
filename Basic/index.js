// function bmiCalculator(weight, height){
//     var bmi = weight/(Math.pow(height,2));
//     return bmi;
// }

// console.log("Your bmi is: "+ Math.round(bmiCalculator(69, 1.8)));

// var n = Math.random();
// n = n * 100; //gives no. from 0 to 99
// console.log(Math.floor(n)+1+"%");

// var char1 = 1.1;
// var char2 = "1.1";

// if(char1 == char2){
//     console.log("1. Both equal");
// }
// else{
//     console.log("1. Not equal");
// }

// if(char1 === char2){
//     console.log("2. Both equal equal");
// }
// else{
//     console.log("2. Not equal equal");
// }


//leap year
 
var year = 2020;

// if(year % 4 === 0){

//     if(year % 100 === 0){
//         if(year % 400 === 0){
//             console.log("Leap year");
//         }
//         else{
//             console.log("Not a leap year");
//         }   
//     }
//     else{
//         console.log("Leap year")
//     }
// } 
// else{
//     console.log("Not a leap year");
// }

if((year % 4 === 0) && (year % 100 !== 0)){
    if(year % 400 === 0){
        console.log("Leap year");
    }
    else{
        console.log("Not a leap year");
    } 
}
else{
    console.log("Not a leap year");
}
