// Complete the solution so that it returns true if the first argument(string)
//  passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

// params
//P: always a string, never anything else, always letters, any length
//R: return or print to console? return them
//E: 'abcd', 'cd' => true
// 'asdf', 'fds' => false
// 'lkio', 'kio' => true

//my solution

function solution(str, ending) {
  return str.endsWith(ending);
}
