// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

export const data = 20;

/**
 * Simple if/elseif statements to determine output
 */
export function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      console.log("fizzbuzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
}
fizzBuzz.testname = "if/elseif";

/**
 * More complex comparisons with no elseif statements
 */
export function fizzBuzz2(n) {
  for (let i = 1; i <= n; i++) {
    const isFizz = i % 3 === 0;
    const isBuzz = i % 5 === 0;
    const isFizzbuzz = isFizz && isBuzz;
    if (!isFizz && !isBuzz) console.log(i);
    if (isFizz && !isBuzz) console.log("fizz");
    if (isBuzz && !isFizz) console.log("buzz");
    if (isFizzbuzz) console.log("fizzbuzz");
  }
}
fizzBuzz2.testname = "complex comparisons";
