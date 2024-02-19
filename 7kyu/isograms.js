// An isogram is a word that has no repeating letters,
// consecutive or non-consecutive. Implement a function that
// determines whether a string that contains only letters is
// an isogram. Assume the empty string is an isogram. Ignore
// letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore
// letter case)

// My Solution
function isIsogram(str) {
  const lowercaseStr = str.toLowerCase();
  const charMap = {};
  for (let char of lowercaseStr) {
    if (charMap[char]) {
      return false;
    }
    charMap[char] = true;
  }

  return true;
}
