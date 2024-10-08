// Story
// Ben has a very simple idea to make some profit: 
// he buys something and sells it again. Of course, 
// this wouldn't give him any profit at all if he was 
// simply to buy and sell it at the same price. Instead, 
// he's going to buy it for the lowest possible price and sell it at the highest.

// Write a function that returns both the minimum and maximum number of the given list/array.

// Examples (Input --> Output)
// [1,2,3,4,5] --> [1,5]
// [2334454,5] --> [5,2334454]
// [1]         --> [1,1]
// Remarks
// All arrays or lists will always have at least one element, so you don't need to check the length. Also, your function will always get an array or a list, you don't have to check for null, undefined or similar.


// My solution

// Examples: 
// [12,4,5,6] -----> [4,12]
// [122430234,1] -----> [1,122430234]
// [12,4,5,6,50,23,10] -----> [4,12]


function minMax(arr){
    return [Math.min(...arr),Math.max(...arr)]
  }
  
  console.log(minMax([1,2,3,4,5]))
  console.log(minMax([6,1,2,3,4]))
  console.log(minMax([1,2,3,50000,4,5,10]))
  console.log(minMax([250,35]))