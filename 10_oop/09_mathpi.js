

const piValue = Object.getOwnPropertyDescriptor(Math, "PI");

// console.log(piValue);


/**
 * The value of the pi cant be overwritten because the property of the pi is 
 * {
 * value: 3.141592653589793,
 * writable: false,
 * enumerable: false,
 * configurable: false
 * }
 */

const chai = {
    name: 'ginger tea',
    price: 250,
    isAviable: function () {
        console.log('this chai in not aviable.');
    }
};

// console.log(Object.getOwnPropertyDescriptor(chai, 'name'));

Object.defineProperty(chai, 'name', {
    writable: false
});

// console.log(Object.getOwnPropertyDescriptor(chai, 'name'));

for (const [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {

        console.log(key, ':-', value);
    }
}