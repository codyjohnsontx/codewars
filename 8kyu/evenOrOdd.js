// Problem:
// Create a function that takes an integer as an argument and 
// returns "Even" for even numbers or "Odd" for odd numbers.

// My notes:
// Based on the knowledge you can create a boolean statment using modulus to determine 
// even or odd makes the javascript function very straight forward

// My solution
function evenOrOdd(number) {
  if (number % 2 == 0){
    return "Even"
  }else{
    return "Odd"
  }
}
