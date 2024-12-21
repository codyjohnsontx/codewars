// Create a method that takes as input a name, city, and 
// state to welcome a person. Note that name will be an array 
// consisting of one or more values that should be joined together 
// with one space between each, and the length of the name array in 
// test cases will vary.

// Example:

// ['John', 'Smith'], 'Phoenix', 'Arizona'
// This example will return the string Hello, John Smith! 
// Welcome to Phoenix, Arizona!



// My solution

function sayHello( name, city, state ) {
    if(name.length === 3){
      return `Hello, ${name[0]} ${name[1]} ${name[2]}! Welcome to ${city}, ${state}!`
    }
    return `Hello, ${name[0]} ${name[1]}! Welcome to ${city}, ${state}!`
  }
  



//   Arrow function

const sayHello = ( name, city, state )=> (name.length == 3) ?
     `Hello, ${name[0]} ${name[1]} ${name[2]}! Welcome to ${city}, ${state}!` :
   `Hello, ${name[0]} ${name[1]}! Welcome to ${city}, ${state}!`
