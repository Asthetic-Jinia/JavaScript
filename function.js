// 1.
function makeTea(typeOfTea) {
    return `Making ${typeOfTea}`;
}
let teaOrder=makeTea("lemon tea");
console.log(teaOrder);
//2.
function orderTea(teatype) {
    function confirmOrder() {
        return `Order confirmed for chai`;
    }
    return confirmOrder()
}

let orderConformation=orderTea("chai")
console.log(orderConformation);
// 3. Arrow Function
const calculateTotal=(price,quantity) => price*quantity
let quantity
let totalCost= calculateTotal(499*quantity)

// 4. higher order function
function makeTea(typeOfTea) {
    return `maketea:${typeOfTea}`;
}
function processTeaOrder(teaFunction) {
    return teaFunction("earl grey");
}
let order=processTeaOrder(makeTea);
console.log(order);

// 5.
function createTeaMaker() {
    return function(teatype){
        return`Making ${teatype}`;
    };
}
let teaMaker=createTeaMaker();
let result=teaMaker("green tea");
console.log(result);
