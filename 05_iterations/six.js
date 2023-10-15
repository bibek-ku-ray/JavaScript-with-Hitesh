const coding = ["Cpp", "java", "c", "javascript", "ruby"]


// const values = coding.forEach((itm) => {
//     console.log(itm);
//     return itm
// })

// console.log(values);


//in filter we should write condition
const myNum = [1,2,3,4,5,6,7,8,9]

// const newnums = myNum.filter((num) => (num > 4))
// console.log(newnums);
/**
 * output is [ 5, 6, 7, 8, 9 ]
 */


// const newnums1 = myNum.filter((num) => {
//     num > 4
// })
// console.log(newnums1);

/**
 * output is [] because now num > 4 is inside curly bracket and is in scope and scope is open.
 * 
 * so to make this code run we should return. code below
 */

// const newnums2 = myNum.filter((num) => {
//     return num > 4
// })
// console.log(newnums2);

// const newNums = []
// myNum.forEach((num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// })

// console.log(newNums);


const books = [
    {title: 'book one', genre: 'fiction', publish: 1950, edition: 2012},
    {title: 'book two', genre: 'science', publish: 1980, edition: 2017},
    {title: 'book three', genre: 'non-fiction', publish: 1914, edition: 2001},
    {title: 'book four', genre: 'fiction', publish: 1932, edition: 2004},
    {title: 'book five', genre: 'fiction', publish: 1999, edition: 2022},
    {title: 'book six', genre: 'non-fiction', publish: 1987, edition: 2002},
    {title: 'book seven', genre: 'science', publish: 1957, edition: 2009},
    {title: 'book eighy', genre: 'fiction', publish: 1921, edition: 2010},
]

const myBooks =  books.filter((bk) => bk.genre === 'science')
console.log(myBooks);

console.log();


//here scope is open so, we should retrun the values
const myBooks1 =  books.filter((bk) => {
    return bk.edition >= 2005 && bk.genre === 'fiction'
})
console.log(myBooks1);