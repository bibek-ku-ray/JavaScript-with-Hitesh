//singleton

const tinderUser = new Object()
// console.log(tinderUser);

tinderUser.id = "12a"
tinderUser.name = "bibek"
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

 const name = {
    email: "bib@gmail.com",
    fullname: {
        userfullname: {
            firstname: "bibke",
            lastname: "ray"
        }
    }
 }

//  console.log(name.fullname.userfullname.firstname);
//  console.log(name.fullname.userfullname.lastname);

//  console.log(name.fullname);

const obj1 = {1: "one", 2: "two"}
const obj2 = {3: "three", 4: "four"}

const obj3 = Object.assign({}, obj1, obj2)
const obj4 = Object.assign( obj1, obj2)

const obj5 = {...obj1, ...obj2}
// console.log(obj5);
// console.log(obj3);
// console.log(obj4);

// console.log(Object.values(tinderUser)); //return value in array form
// console.log(Object.keys(tinderUser)); //return key in array form
// console.log(Object.entries(tinderUser)); // return key and value pair in form of array

// console.log(tinderUser.hasOwnProperty("name"));




//++++++++++++++++++++++++++++  Object destructuring and JSON API +++++++++++++++++++++++++++++++

//Oabject destructure

const course = {
    courseName: "JS",
    price: 0,
    instructor: "hitesh"
}

console.log(course.courseName);

//destructuring
const {courseName} = course
const {instructor: teacher} = course

console.log(courseName);
console.log(teacher);

//API
//JSON


// {
//     "name": "bibek"
//     "courseName": "js in hindi"
//     "fee": "free"
// }