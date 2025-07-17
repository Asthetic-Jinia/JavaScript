// 1.
let teaFlavors=["green tea", "black tea", "oolong tea"]
const firstTea=console.log(teaFlavors[0]);

// 2.
let cities=["Mumbai","Sydney","Berlin"]
const favoriteCity= console.log(cities[2]);

// 3.
let teaTypes=["herbal tea","white tea","masala chai"]
teaTypes[1]="jasmine tea"
console.log(teaTypes[1])

// 4.push berlin
let citiesVisited=["Mumbai","Sydney"]
citiesVisited[2]="Berlin";
citiesVisited.push("Berlin") // we can add something by push only at the end of the array
console.log(citiesVisited)
// 5. remove last element using pop
let teaOrders=["chai","iced tea","matcha","earl grey"]
teaOrders.pop();
console.log(teaOrders);
//6.create softcopy (if one change other will be also change)
let popularTeas=["green tea", "black tea", "oolong tea"]
let softCopyTeas=popularTeas;
popularTeas.pop();
console.log(softCopyTeas);
console.log(popularTeas);
//7. create hard copy (if any one change other will not be effected)
let topCities=["Mumbai","Sydney","Berlin"]
let hardCopyCities=[...topCities];
//let hardCopyCities=topCities.slice
topCities.pop()
console.log(topCities)
console.log(hardCopyCities)
// 8. merge two arrays
let europeanCities=["Paris","Rome"];
let asianCities=["Tokyo","Bangkok"];
let worldCities=europeanCities.concat(asianCities);
console.log(worldCities);
// 9. find length
let teaMenu=["Masala chai","oolong tea","green tea","earl grey"]
let menuLength=console.log(teaMenu.length);
//10. if statement
let cityBucketList=["Kyoto","London","Cape Town","Vancouver"]
let isLondonInList=cityBucketList.includes("London");
console.log(isLondonInList);
