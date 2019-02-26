//You have one array and two objects to work with
console.log("Cereal Data:", cerealData)
console.log("Manufacture Data:", manufacturers)
console.log("Type Data:", types)

//.map is used when you want to return a transformed  array; length of new array will be equal to original array
//.filter is used when you want to return a filtered array containing some of the same objects as in the original array; lengths may be different
//.find is used when you want to find the first element that matches a certain condition; an single object (not an array) is returned
//.reduce will reduce the entired array into a single value and return that value

//1. Using .map(), generate an array of just the names of the cereals.
//Do this three ways: function declaration, inline function expression, and arrow function.

//2. Using filter(), find all cereal objects that have exactly 110 calories.
//Do this three ways: function declaration, inline function expression, and arrow function.

//3. Using.find(), find the first hot cereal object
//Do this three ways: function declaration, inline function expression, and arrow function.

//4. Find all the cereals objects that have sodium of less than 200 AND potass of greater than 150.

//5. Transform the array of cereal objects into an array of their Manufacture's name

//6. write a function findById(num) that takes in a number as an argument and returns
//the cereal object that has an id equal to the value of num
