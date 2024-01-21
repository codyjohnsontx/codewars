// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6



// My solution

function sumArray(array) {
    if (!array || array.length < 3) return 0 
    sorted = array.sort((num1, num2) => num1 - num2)
    return sorted.slice(1,-1).reduce((total, current) => total + current)
  }