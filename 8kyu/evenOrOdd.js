// Codewars Training: Javascript fundamentals, 8kyu
// Problem:
// Create a function that takes an integer as an argument and 
// returns "Even" for even numbers or "Odd" for odd numbers.

// My notes:
// Based on the knowledge you can create a boolean statement using modulus to determine 
// even or odd makes the JavaScript function very straightforward

// My solution--first pass
function evenOrOddFirstPass(number) {
    if (number % 2 == 0) {
      return "Even";
    } else {
      return "Odd";
    }
  }
  
  // Upon reviewing some documentation, I realized I could
  // refactor my original solution using the ternary operator to perform 
  // the if-else statement in a single line, making it cleaner and more elegant
  // while still solving the original problem.
  
  // Refactored Solution:
  function evenOrOdd(number) {
    return number % 2 === 0 ? "Even" : "Odd";
  }
  