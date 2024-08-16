// Return an array containing the numbers from 1 to N, where N is the parametered value.

// Replace certain values however if any of the following conditions are met:

// If the value is a multiple of 3: use the value "Fizz" instead
// If the value is a multiple of 5: use the value "Buzz" instead
// If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
// N will never be less than 1.

// Method calling example:

// fizzbuzz(3) -->  [1, 2, "Fizz"]


// Params
// divisible by 3 = fizz
// divisible by 5 = buzz
// divisible by 3 & 5 = fizzbuzz
// always a number, whole, positive number
// Return
// console.log of each number
// E
function fizzBuzz(num){
    for(let i = 1; i < num; i++){
        if(i % 3 == 0 && i % 5 == 0 ){
            console.log('fizzBuzz')
        }else{
            if(i % 3 == 0){
                console.log('fizz')
            }else{
                if(i%5 == 0){
                    console.log('buzz')
                }else{
                    console.log(i)
                }
            }
        }
    }
    // conditionals% 3 && %5, % 3, % 5
    // console.log num or fizz,buzz, fizzbuzz
}


fizzBuzz(5) // 1,2,fizz,4, buzz
fizzBuzz(3) // 1, 2, buzz
fizzBuzz(15) // 1, 2, fizz, 4, buzz, fizz, 7, 8, fizz, buzz, 11, fizz, 13, 14, fizzbuzz