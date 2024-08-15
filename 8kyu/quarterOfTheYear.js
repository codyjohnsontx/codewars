// Given a month as an integer from 1 to 12, return to which 
// quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; 
// month 6 (June), is part of the second quarter; and month 11 (November), 
// is part of the fourth quarter.

// Constraint:

// 1 <= month <= 12


// My PREP

// **Params**
// function takes in a month of the year as an integer
// **Returns**
// function will take the integer entered in the parameter of function
// and return a quarter of the year
// **Example**
// param -> 2 = return feburary = returns 1
// pararm -> 9 = return september = returns 3
// params -> 12 = return decemeber = returns 4
// params -> 15 = return `Please enter a month as an integer 1-12`
// **Pseudo**
// enter param in for month
// switch case for each month
// each switch case enters month associated with integer
// 1-3 equals 1
// 4-6 equals 2
// 7-9 equals 3 
// 10-12 equals 4



// my solution
const quarterOf = (month) => {
    if (month >= 1 && month <= 3) {
      return 1;
    } else if (month >= 4 && month <= 6) {
      return 2;
    } else if (month >= 7 && month <= 9) {
      return 3;
    } else if (month >= 10 && month <= 12) {
      return 4;
    } else {
      return 'Please enter a valid number';
    }
  };
  