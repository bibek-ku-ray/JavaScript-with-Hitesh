//+++++++++++++++ numbers +++++++++++++++++++++++++

const balance = new Number(122.68728)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

// console.log(balance.toPrecision(4));

const lakhsss = 1000000000
// console.log(lakhsss.toLocaleString());

//**************** maths *****************/
// console.log(Math.round(2.8));
// console.log(Math.sinh(90));

//console.log(Math.round(Math.random()*10)+1);

/**
 * Generate random value between 20 to 40
 */
const min = 20
const max = 40
for (let i = 0; i < 70; i++) {
  console.log(Math.floor(Math.random() * (max - min) + 1) + min)
}
