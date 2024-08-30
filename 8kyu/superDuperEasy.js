// Make a function that returns the value multiplied by 50 
// and increased by 6. If the value entered is a string 
// it should return "Error".
// P: should always be a whole positive number. but string is possible
// R: should return the end result
// E: x = 5        // return (5 * 50) + 6 = 256.   
//    x = 'hello'  // return "Error"
//    x = 10       // 506
//    x = 'bob'    //'Error'
// P: if statement to determine if num or string
//    if string return 'Error'
//    else(x = num) return (x * 50) + 6

// function isNumber(value) {
  // return typeof value === 'number';
// }

function problem(x){
  if (typeof x === 'string' ){
    return 'Error'
  }else{
    return (x * 50) + 6
  }
}


// refactor further into ternary

function problem(x) {
    return (typeof x === 'string') ? 'Error' : (x * 50) + 6

}

// arrow function

const problem = (x) => {
    if(typeof x === 'string'){
        return 'Error'
    }
        return (x * 50) + 6
}