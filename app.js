// Data Structure; Objects and Arrays
// Task 3 _ Objects
var Patient = {
    Disease: "Diabetes",
    Age: 40,
    Symptoms: "high BP and glucose level",
    Gender: "Both",
    Hospital: "Agha Khan Hospital"
};
console.log(Patient);
// Task 4 _ Arrays
// Arrays =>[] index = 0 for first aaray
// Arrays of String
var cars = ["Tesla", "Audi", "Hyundai", "BMW", "Toyota"];
console.log(cars[0], cars[1], cars[4]);
//Replace the value at index 2 (which is Hyundai) with a new value, let's say Lamborghini
cars[2] = "Lamborghini";
console.log(cars[2]);
//Arrays of Number
var sales = [250, 160, 456, 780];
console.log(sales[1], sales[3]);
// Replace the value at index 3 (which is 780) with a new value, let's say 800
sales[3] = 800;
console.log(sales[3]);
// Mixed Arrays
var mixedArrays = ["Bella", 26, true, null];
console.log(mixedArrays);
// Arrays of Boolean
var isFollow = [true, false];
console.log(isFollow[0]);
