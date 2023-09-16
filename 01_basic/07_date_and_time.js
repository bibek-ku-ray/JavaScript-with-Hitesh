let myDate = new Date()

// console.log(myDate.toString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.getFullYear());
// console.log(myDate.getMilliseconds());
// console.log(myDate.getUTCDate());

let myCreatedDate = new Date(2023,11,25)
//console.log(myCreatedDate.toDateString());

let myCreatedDate2 = new Date("2023-01-25")
//console.log(myCreatedDate2.toDateString());


let Newdate = Date.now()
console.log(Math.floor(Date.now()/1000));
// console.log(Newdate.getMonth());


Newdate.toLocaleString('default',{
    weekday: "long"
})