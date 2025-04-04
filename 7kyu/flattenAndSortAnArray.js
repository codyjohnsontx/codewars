// Challenge:

// Given a two-dimensional array of integers, return the flattened version of the array
// with all the integers in the sorted (ascending) order.

// Example:

// Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

// Addendum:

// Please, keep in mind, that JavaScript is by default sorting objects alphabetically. For
// more information, please consult:

// My solution
// Needs to be ascending -> a - b
// Descending would be b - a

// Always be a positive number, array could be empty

'use strict';

let array = [[3, 2, 1], [4, 6, 5], [100], [9, 7, 8]];

function flattenAndSort(array) {
  return array.flat().sort((a, b) => a - b);
}

// output return -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 100]
