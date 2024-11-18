// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8
// 3 --  7 + 9 + 11 = 27
// ...




//              1              ===> 1    Index(1)   1 ** ? === 3
//           3     5           ===> 8    Index(2)   2 ** ? === 8
//        7     9    11        ===> 27   Index(3)   3 ** ? === 27
//    13    15    17    19     ===> 64   Index(4)   4 ** ? === 64
// 21    23    25    27    29  ===> 125  Index(5)   5 ** ? === 125
// ...



// My solution
// looks tricky but super simple when you break it down

function rowSumOddNumbers(n) {
	return n**3
}