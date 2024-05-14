// Finish the solution so that it sorts the passed in array of
// numbers. If the function passes in an empty array or null/nil
//  value then it should return an empty array.

// For example:

// solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
// solution(null); // should return []

// My solution

// Psuedo code
// First we need to determine if array passed through function is empty or null
// if statement checking if argument is falsy OR equal to zero
// IF EITHER of those, return empty array []
//next we will do an ELSE statment for if the argument array does have 1 or more numbers in it
// ELSE statement that will then sort the array of numbers
// argument.sort((a,b) => a - b)

// My solution

function solution(nums) {
  if (!nums || nums === 0) {
    return [];
  } else {
    return nums.sort((a, b) => a - b);
  }
}
