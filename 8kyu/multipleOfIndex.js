// Return a new array consisting of elements which are multiple of
// their own index in input array (length > 1).

// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]

// [68, -1, 1, -7, 10, 10] => [-1, 10]

// [-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68] => [-85, 72, 0, 68]

// My solution
function multipleOfIndex(array) {
  //create new empty array

  // edge case -> if first element is zero add it to newArray
  const newArray = [];
  if (array[0] === 0) {
    newArray.push(0);
  }

  //for loop to iterate through array
  for (let i = 1; i < array.length; i++) {
    if (array[i] % i === 0) {
      newArray.push(array[i]);
    }
  }
  return newArray;
  //if statement = if element is divisble by its position(index)
  //add to new array
  //use modulo here % === 0
}
