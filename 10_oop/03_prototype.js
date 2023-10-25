
const myObj = {
    name: 'bibek',
    course: "BCA"
};

const fruitArray = ['apple', 'mango'];

Object.prototype.heyBibek = function () {
    console.log('bibek says hey in object');
};

Array.prototype.helloBibek = function () {
    console.log('bibek says hello in array');
};

const myFun = function () { };

// myObj.heyBibek();
// fruitArray.heyBibek();

// myObj.helloBibek();
// fruitArray.helloBibek();

// myFun.heyBibek()

/**
 * Note:
 * 
 * if prototype is made in Object then that method can be access anywhere ie in (array, object, string, function, etc)
 * because everthing in js is object or goes through Object.
 * 
 * if prototype is made in Array or in any other thing then that can be access in only that not in other. 
 */


//inheritance

const user = {
    name: 'chai',
    email: 'chai@fantech.com'
};

const teacher = {
    makeVideo: true
};

const teachingSupport = {
    isAviable: true,
    __proto__: teacher  // all the properties of teacher is inhert in teachingSupport
};


//morder Syntax
Object.setPrototypeOf(teacher, user); //all the properties of user is inhert to teacher
// console.log(teacher.name);
// console.log(teachingSupport.makeVideo);

const name = 'car    ';

String.prototype.trueLenght = function () {
    console.log(this);
    console.log(`The true lenght of string is ${this.trim().length}`);
};

name.trueLenght();

'bibek   '.trueLenght();

console.log(String.prototype);