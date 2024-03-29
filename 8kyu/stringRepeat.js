// Write a function that accepts an integer n
// and a string s as parameters, and returns a string of s repeated exactly n times.

// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

// My Solution
function repeatStr(n, s) {
  let repeat = "";
  for (i = 1; i <= n; i++) {
    repeat += s;
  }
  return repeat;
}

// Different way of doing it

function repeatStr(n, s) {
  return s.repeat(n);
}
