//if
// <, >, <=, >=, ==, !=, ===, !==

const isUserLoggedIn = true

if(2==="2"){
    console.log("Welcome");
}

if(2!=="2"){
    console.log("Welcome again");
}

const balance = 1000

if (balance > 500) console.log("Test"), console.log("Test2");
// dont write like this because it hamper readiablilty

// write like this
// if (balance > 500) console.log("Test"), console.log("Test2");

// if (balance < 500) {
//     console.log("Less than 500");
    
// } else if(balance < 750){
//     console.log("less than 750");

// } else if(balance < 900){
//     console.log("less than 900");

// } else {
//     console.log("less than 1200");
// }


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard){
    console.log("allow to buy.");
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("User logged in");
}