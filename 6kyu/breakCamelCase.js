// Complete the solution so that the function 
// will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""


// P
// always be letters, no numbers
// no spaces between letters
// no capitals in first Letter, will always be camelCase or empty string
// 
// R
// how do i return? return or console.log?
// return
// 
// E
// function camelCase(word){

// }
// camelCase(javaScript) => java Script
// camelCase(toYota) => to Yota
// camelCase(lexus) => lexus
// 
// P
function camelCase(word){
    // break word apart into an array
    // use map function to create new array to call a provided function on
    // if letter in positon (i) equals that letter but capitalized return it to new array
    // else return just the letter
    // once completed join the array back into word
    return word.split('').map(char => {
        return char === char.toUpperCase() ? " " + char : char
    }).join('')
}