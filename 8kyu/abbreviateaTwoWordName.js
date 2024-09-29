// Write a function to convert a name into initials. 
// This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F


// My solution


function abbrevName(name){
    let firstInitial = name[0].toUpperCase();
    let secondInitial = name[name.indexOf(' ') + 1].toUpperCase()
    return `${firstInitial}.${secondInitial}`
  
  }
  
  console.log(abbrevName('Cody Johnson'))   // returns C.J
  console.log(abbrevName('mike HONCHO'))    //returns M.H
  console.log(abbrevName('KEANU reeves'))  //returns K.R
  console.log(abbrevName('marky mark'))  //returns M.M