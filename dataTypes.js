"use strict"; //treat all Js code as newer version

// alert(3+3) // we are using node js , not browser

console.log(3
    +
     3) //code should be readable not like this
      
 console.log("Jinia");
     
 // read documentation from MDN (preferable) or ECMA script

 //conversion and operator

 let score="33abc"

 console.log(typeof score)
 console.log(typeof (score))

 let valueInNumber= Number(score)
 console.log(typeof valueInNumber)
 console.log( valueInNumber)    // NaN means not a number

 //"33" => 33
 //"33abc" => NaN
 // true => 1; false => 0;

 let isLoggedIn=1 // => true and 0=> false
//  let isLoggedIn="jinia" // => true
//  let isLoggedIn= "" // => false

 let booleanIsloggedIn= Boolean(isLoggedIn)
 console.log(booleanIsloggedIn)

 let someNumber=33
 let stringNumber= String(someNumber)
 console.log(stringNumber);
 console.log(typeof stringNumber)