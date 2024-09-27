// Write a function named sumDigits which takes a number as input and returns the
//  sum of the absolute value of each of the number's decimal digits.

// For example: (Input --> Output)

// 10 --> 1
// 99 --> 18
// -32 --> 5


// My solution

function sumDigits(number) {
    number = Math.abs(number).toString().split('')
    const firstNum = Number(number[0])
    const secondNum = Number(number[1])
    return firstNum + secondNum
  }
  

//   refactor

function sumDigits(number) {
    number = Math.abs(number).toString(); 
    let sum = 0;
  
  
    for (let i = 0; i < number.length; i++) {
      sum += number[i] - '0'; 
    }
  
    return sum; 
  }
  
  
  