//Singleton
//Object.create

//Object literals

const sym = Symbol("Bbiek syb")

const user = {
    name: "Bibek",
    "full name": "Bibek kumar Ray", //this cant be accessed by dot operator
    age: 21,
    [sym]: "Hello Bibek",  //--imp-- symbol should be defined in squre barcket, if not then it is taken as string.
    address: "Kathmandu",
    email: "bibek@gmail.com",
    isLoggedIn: false
}

// console.log(user.name);
// console.log(user["name"]);
// console.log(user["full name"]);
// console.log(user[sym]); //use to access symbol

user.email = "bibekray@google.com"  //to change the object
// console.log(user["email"]);

// Object.freeze(user) 
/**
 * once the object is freezed the changed in object cant be done.
 * single element of the object cant be freezed, whole object should be freezed -> Object.freeze(user)  
 */

user.email = "bibekkumarray@gmail.com"
// console.log(user);


user.greeting = function(){
    console.log("Hello user");
}

user.greetingTwo = function(){
    console.log(`Hello, ${this.name}`);
}

console.log(user.greeting());
console.log(user.greetingTwo());