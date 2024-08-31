// Your classmates asked you to copy some paperwork for them. You know that there are 
// 'n' classmates and the paperwork has 'm' pages.

// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

// Example:
// n= 5, m=5: 25
// n=-5, m=5:  0
// Waiting for translations and Feedback! Thanks!

// p: always a number, could be negative
// r: return a value
// e: n= 5, m=5: 25
// n=-5, m=5:  0
// n=10, n=10: 100
// edge case: if n is less than 0 or m is less than 0 RETURN 0
// if statment determine if n or m is less than 0
// if less than 0 return 0
// else mutiply n by m and return it



// My solution

function paperwork(n, m) {
    if(n< 0 || m < 0){
      return 0
    }else{
      return n * m
    }
  }
  



  //refactor into arrow function

  let paperWork = (n,m) => {
    if(n < 0 || m < 0){
        return 0
    }
    return n * m

  }