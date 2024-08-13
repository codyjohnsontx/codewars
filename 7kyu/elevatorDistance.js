// Imagine you start on the 5th floor of a building, then travel down to the 2nd floor,
// then back up to the 8th floor. You have travelled a total of 3 + 6 = 9 floors of distance.

// Given an array representing a series of floors you must reach by elevator, return an
//  integer representing the total distance travelled for visiting each floor in the array in order.

// // simple examples
// elevatorDistance([5,2,8]) = 9
// elevatorDistance([1,2,3]) = 2
// elevatorDistance([7,1,7,1]) = 18

// // if two consecutive floors are the same,
// //distance travelled between them is 0
// elevatorDistance([3,3]) = 0
// Array will always contain at least 2 floors. Random tests will contain 2-20 elements
// in array, and floor values between 0 and 30.

// PREP
// **params**
// Array will always contain at least 2 floors.
// Random tests will contain 2-20
// floor values between 0 and 30.
// [2,30]
// [2,5,7]
//**Returns**
// [2,30]  = 28
// [2,0,7] = 9
//**Example**
// [2,30] = [2 - 30] = |2 - 30| =
// [2,5,7] = [2 - 5] + [5 -7] = |2 - 5| + |5 -7|
// **pseudocode
// function elevatorDistance(array) {
//   total distance = 0
//   for loop(for each index i to length of array)
//     calculate absolute difference between array[i] position and array[i-1] position
//     Add this difference totalDistance
//   return totalDistance
// }

function elevatorDistance(array) {
  let totalDistance = 0;

  for (let i = 1; i < array.length; i++) {
    totalDistance += Math.abs(array[i] - array[i - 1]);
  }
  return totalDistance;
}
