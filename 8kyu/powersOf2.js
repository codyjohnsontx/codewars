// Complete the function that takes a non-negative integer 
// n as input, and returns a list of all the powers of 
// 2 with the exponent ranging from 0 to n ( inclusive ).

// Examples
// n = 0  ==> [1]        # [2^0]
// n = 1  ==> [1, 2]     # [2^0, 2^1]
// n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]


// My solution
// Always a positive never a negative
// always starts at 0
// for loop that multiples each increment up by 2
// 0, 1 , 2, 4, 8, 16, 32

function powersOfTwo(n){
    let array = []
    for(let i = 0; i<=n;i++){
      array.push(2**i)
    }
    return array
  }