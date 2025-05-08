// Task
// Given a list of unique numbers sorted in ascending order, return a new list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).

// Example
// Input:  1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8

// Solution
function pipeFix(numbers) {
  const result = [];

  const min = numbers[0];
  const max = numbers[numbers.length - 1];

  for (let i = min; i <= max; i++) {
    result.push(i);
  }

  return result;
}
