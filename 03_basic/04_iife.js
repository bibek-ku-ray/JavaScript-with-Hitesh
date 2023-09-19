//Immediately Invoked function Expression (IIFE)

/**
 * this is uesd for immediate execution of the function
 * used to avoid the pollution of global scope declartion
 */

//named iife
(function chai(name){
    console.log(`connected to chai db, ${name}`);
})('Kumar'); //semicolon should be used to terminate this function

//unnamed iife
(() => {
    console.log(`connected to chai db again.`);
})();

//passing parameter in iife
((name) => {
    console.log(`connected to chai db again again, ${name}`);
})("bibek");