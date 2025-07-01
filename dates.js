// Date

let myDate= new Date()
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(myDate.toJSON())
console.log(myDate.toISOString())
console.log(typeof myDate)

// let myCreaterDate=new Date(2023,0,23) // array starts from 0, so 0 means January
// myCreaterDate=new Date(2023,0,23,5,3)
 myCreaterDate=new Date("01-14-2023")
// myCreaterDate=new Date("2023-01-14")

 console.log(myCreaterDate.toLocaleString())

 let myTimeStamp=Date.now()

 console.log(myTimeStamp) //in milli sec
console.log(myCreaterDate.getTime())
console.log(Math.floor(Date.now()/1000)) //in sec

let newDate= new Date()
console.log(newDate)
console.log(newDate.getMonth()+1)
console.log(newDate.getDay())

newDate.toLocaleString('default',{
    weekday:"long",
})