// 1.
let teas=["green tea","black tea","chai","oolong tea"];
let selectedTeas=[]
for (let i = 0; i < teas.length; i++) {
   
    if (teas[i]==="chai") {
        break;
    }
     selectedTeas.push(teas[i])
}
console.log(selectedTeas);

// 2.
let cities=["London","New York","Paris","Berlin"]
let visitedCities=[];
for (let j = 0; j < cities.length; j++) {
    if (cities[j]==="Paris") {
        continue;
    }
    visitedCities.push(cities[j])
    
}
console.log(visitedCities);

//3. for-of loop
let numbers=[1,2,3,4,5]
let smallNumbers=[]
for (const num of numbers) {
    if (num===4) {
       break; 
    }
    smallNumbers.push(num)
}
console.log(smallNumbers)

// 4. for-of loop
let tea=["chai","green tea","herbal tea","black tea"]
let preferredTeas=[]
for (const nums of tea) {
    if (nums==="herbal tea") {
       continue 
    }
    preferredTeas.push(nums)
}
console.log(preferredTeas);

// 5. for-in loop ( storein new object)
let citiesPopulation={
    "London":8900000,
    "New York":8400000,
    "Paris":2200000,
    "Berlin":3500000
}
let cityNewPopulations={}
// console.log(Object.keys(citiesPopulation))
//console.log(Object.values(citiesPopulation))
for (const city in citiesPopulation) {
    if(city==="Berlin"){
        break
    }

cityNewPopulations[city]=citiesPopulation[city]
}
console.log(cityNewPopulations)

// same as question 5. .....just use continue at the place of break

//7. for-each loop(to skip any element)
let teaCollection=["earl grey","green tea","chai","oolong tea"]
let availableTeas=[];
teaCollection.forEach(function (tea) {
    if(tea==="chai"){
        return;
    }
    availableTeas.push(tea)
})
console.log(availableTeas);


// 9. for loop
let arr=[2,5,7,9]
let doubleNumbers=[]
for (let l = 0; l < arr.length; l++) {
   if (arr[l]===7) {
     continue
   }
   doubleNumbers.push(arr[l]*2); 
   
}
console.log(doubleNumbers)

// 10. for-of
let teaTypes=["chai","green tea","black tea","jasmine tea","herbal tea"]
let shortTeas=[];
for (const tea of teaTypes) {
    if(tea.length >10){
        break;
    
    }
 shortTeas.push(tea)
}
console.log(shortTeas)