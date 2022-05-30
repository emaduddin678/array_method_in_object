// Object.keys(obj)
// Object.values(obj)
// Object.entries(obj);
// Create an iterable Object from the Object

let country = {
    bangladesh: "Dhaka",
    saudiarabia: "Riad",
    pakistan: "Islamabaad",
    afghanistan: "kabul",
    malaysia: "Kualalampur",
    china: "Beijing",
    rashia: "Masko"
}

// for(let property of Array) This is for array. where property is the value of Array.
// foreach(), filter(), map(), reduce() This is also for Array
// we can't use these method for object
// But But But we have to use them, so let's do that

let objKeys = Object.keys(country);
// console.log(objKeys);

let objValues = Object.values(country);
// console.log(objValues)

let objEntries = Object.entries(country)
// console.log(objEntries);
// console.log(objEntries[2][1]);


objEntries.forEach(function(x,y,z){
    console.log(x,y,z)
})
objEntries.map(function(x,y,z){
    // console.log(x,y,z)
})

const newArrayObj = objEntries.map(function(x,y,z){
    // console.log(x)
    console.log(`This is the same object but using array method map and print ${x}`)
})