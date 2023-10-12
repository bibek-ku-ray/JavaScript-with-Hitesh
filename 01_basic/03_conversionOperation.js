let age = 33
let score = "34aa"

console.log(typeof age); //-> number
console.log(typeof score); //-> string

let scoreInNumber = Number(score);
console.log(typeof scoreInNumber); //-> number
console.log(scoreInNumber); //-> NaN

/*
NOTE:
"33" => 33
"33aa" => NaN
true = 1; false = 0
*/
 

let isLoggedIn = "";

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  
/*
NOTE
1 = true
0 = false
bibek = true
"" = false
*/

console.log("booleanIsLoggedIn: ",booleanIsLoggedIn); //-> false

let number = 100;

let numberToString = String(number)

console.log("numberToString:: ", numberToString) //->100
console.log("typeof numberToString::",typeof numberToString);  // -> string


// **************** Operation *********************

console.log("\n**************** Operation *********************\n");

let value = 2
let negValue = -value
console.log(negValue);

let str1 = "hello "
let str2 = "bibek"

console.log(str1+str2);

let num1 = 10
let str3 = "20"
console.log("10 and str20 "+num1+str3);
console.log("str20 and 10 "+str3+num1);

console.log("str1+num1: "+str1+num1);

console.log("1" + 2 + 2); // 122
console.log(1+2+"2"); // 32

// console.log(1+2+2+"2"+"5"); // 525
// console.log(1+2+2+"2"+5); // 525
// console.log(1+2+2+"2"+5+1); // 5251

// console.log(true); // true
// console.log(+true); // 1
// console.log(-true); // -1
// console.log(+""); // 0

console.log(typeof(-true)); //this is the number and its value is 1
console.log(typeof(+"")); // this is number and its value is 0
console.log(typeof(+true));



console.log("increment and decreament");
let num2 = 2
let num6 = 6
let num3 = num2++
let num5 = ++num6

console.log(num3); //2
console.log("num5 is ",num5);

let num4 = ++num2
console.log(num4); //4


