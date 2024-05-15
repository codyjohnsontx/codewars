// Nathan loves cycling.

// Because Nathan knows it is important to stay hydrated,
// he drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the number
//  of litres Nathan will drink, rounded to the smallest value.

// For example:

// time = 3 ----> litres = 1

// time = 6.7---> litres = 3

// time = 11.8--> litres = 5

// Psuedo code
// first thing to do is multiply .5 by time and set it equal to new variable
// Let litresToDrink = time .5
// Problem says return number of litres to drink rounded to smallest Value
// rounded to smallest value means rounding down
// IN this case we will use Math.floor(

// My solution

function litres(time) {
  let litresToDrink = time * 0.5;
  return Math.floor(litresToDrink);
}
