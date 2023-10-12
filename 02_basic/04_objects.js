//singleton

const tinderUser = new Object()
// console.log(tinderUser);

tinderUser.id = "12a"
tinderUser.name1 = "bibek"
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

 const name1 = {
    email: "bib@gmail.com",
    fullname1: {
        userfullname1: {
            firstname1: "bibke",
            lastname1: "ray"
        }
    }
 }

//  console.log(name11.fullname11.userfullname11.firstname11);
//  console.log(name11.fullname11.userfullname11.lastname11);
 console.log(name1.fullname1.myname1?.userfullname1.lastname1);
 console.log(name1.fullname1.userfullname1.lastname1);

//  console.log(name1.fullname1);

const obj1 = {1: "one", 2: "two"}
const obj2 = {3: "three", 4: "four"}

const obj3 = Object.assign({}, obj1, obj2) //obj1 n obj2 is been assign to new object i.e {}
const obj4 = Object.assign( obj1, obj2) //obj1 is been assign or added to obj1

const obj5 = {...obj1, ...obj2}
// console.log(obj5);
console.log("obj 3::",obj3);
console.log("obj 1:::",obj1);
// console.log(obj4);

console.log(Object.values(tinderUser)); //return value in array form from obj: tinderuser
console.log(Object.keys(tinderUser)); //return key in array form
console.log(Object.entries(tinderUser)); // return key and value pair in form of array

// console.log(tinderUser.hasOwnProperty("name1"));




//++++++++++++++++++++++++++++  Object destructuring and JSON API +++++++++++++++++++++++++++++++

//Object destructure

const course = {
    coursename1: "JS",
    price: 0,
    instructor: "hitesh"
}

console.log(course.coursename1);

//destructuring
const {coursename1} = course
const {instructor: teacher} = course

console.log(coursename1);
console.log(teacher);

//API
//JSON


// {
//     "name1": "bibek"
//     "coursename1": "js in hindi"
//     "fee": "free"
// }