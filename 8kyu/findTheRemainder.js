// Task:
// Write a function that accepts two integers and returns the remainder
// of dividing the larger value by the smaller value.

// Division by zero should return NaN.

// Examples:
// n = 17
// m = 5
// result = 2 (remainder of `17 / 5`)

// My solution
function remainder(n, m) {
  if (m > 0 || n > 0) {
    if (n > m) {
      return n % m;
    } else {
      return m % n;
    }
  } else {
    return NaN;
  }
}

// refactoring

const remainder = (n, m) => {
  return n > m ? n % m : m % n;
};
