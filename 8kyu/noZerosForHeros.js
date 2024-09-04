// // Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105
// Zero alone is fine, don't worry about it. Poor guy anyway

// Lets solve this
// always will be a number, always will be a whole number (non-float), could be negative, could be 0
// will be a return and not a console.log
// Examples: 1500000 -> 15
// 250 -> 25
// -750 -> -75
// 0 -> 0
// Psuedo
// if n === 0 return 0
// while statement -while num is perfectly divisible by 10 -> %10 === 0
// divide num by 10 -> removing 0's
// return num
function noBoringZeros(n) {
  if (n === 0) {
    return 0;
  }
  while (n % 10 === 0) {
    n = n / 10;
  }
  return n;
}
