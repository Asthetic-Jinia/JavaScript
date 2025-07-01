// Data type and memory


//data type
// Primitive
 
//7 types: String,Number, Boolean,null,undefined,Symbol,BigInt


const score= 100.3
const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id===anotherId)

const bigNumber=5656846654166363584n


//Reference(Non primitive)

// Array,objects,Functions

const heros=["jinia","mahi","mampi"];

let myObj={
    name:"jinia",
    age:"20"

}
// data type of function is funcion or object function
const myFunction= function(){
    console.log("Hello World");
}

console.log(typeof bigNumber) // undefined
// for null => object

//Memory(Stack(primitive) and Heap(non-primitive))
//in stack we get a copy but in heap we gwt reference

let myYoutubename="hiteshchoudhary.com"
let anothername=myYoutubename
anothername="chaiaurcode"

console.log(myYoutubename)
console.log(anothername)

let userOne={
    email:"user@google.com",
    
}
let userTwo=userOne
userTwo.email="hitesh@google.com"
console.log(userOne.email)
console.log(userTwo.email)