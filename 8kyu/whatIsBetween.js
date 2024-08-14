// Complete the function that takes two integers (a, b, where a < b) 
// and return an array of all integers between the input parameters, including them.

// For example:

// a = 1
// b = 4
// --> [1, 2, 3, 4]

// ***Params***
// A always less than b
// return array will include all integers between the input params AND the input 
// Params
// ***Returns***
// a = 1
// b = 4
// [1,2,3,4]
// ***Examples***
//test 1
// a = 1
// b = 4
// [1,2,3,4]
// test 2
// a = 5
// b = 10
// [5,6,7,8,9,10]
// ***Pseudo***
// create function that accepts an 'a' value and a 'b' value as params
// init a empty array to store the return
// create for loop; set index = a; while index less or equal to b;increment++1
// push each new incremented up index to empty array previously init'd
// return array outside for loop

function between(a, b) {
  let newArray = []
  
  for(let i = a; i<= b;i++){
    newArray.push(i)
  }
  return newArray
}