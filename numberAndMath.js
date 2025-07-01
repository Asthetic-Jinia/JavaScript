const score=400
console.log(score);
const balance= new Number(100.32548)
console.log(balance);
console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber=123.8966
console.log(otherNumber.toPrecision(4)) // round off

const hundreds=1000000
console.log(hundreds.toLocaleString('en-IN'))


//++++++++++++++ Maths ++++++++++++++++++++

console.log(Math)
console.log(Math.abs(-4)) // -ve to +ve
console.log(Math.round(4.6))
console.log(Math.ceil(4.6)) // => 5
console.log(Math.floor(4.6)) // => 4
console.log(Math.min(4,5,3,2)) // 2
console.log(Math.max(4,5,3,2))// 5

console.log(Math.random()) // gives ramdom value between 0 and 1 
console.log(Math.floor(Math.random()*10)+1) // added 1 so that the value becomes always greater than 1

const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min+1))+min)