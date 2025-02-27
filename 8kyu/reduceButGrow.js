// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

// My solution
function grow(x) {
  return x.reduce((acc, c) => acc * c, 1);
}



//  Other way of writing it out

function grow(x){
  return x.reduce((totalProduct, currentNumber) => totalProduct * currentNumber, 1)
}