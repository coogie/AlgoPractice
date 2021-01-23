// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

export const data = "racecar";

/**
 * Convert the string to an array, then call the .reverse method on the array.
 * Finally, join the array back together as a single string and compare it to
 * input.
 *
 * Speed - O(n3)
 *   1 loop for the split
 *   1 loop for the reverse
 *   1 loop for the join
 *
 * Pros:
 *   Concise
 *   Easy to understand
 *
 * Cons:
 *   Slow
 */
export function palindrome(str) {
  return str === str.split("").reverse().join("");
}
palindrome.testname = "Naive solution";

/**
 * Build a new string from scratch, iterating over input from end until start,
 * appending each char to the holding string. Compare holding string to input to
 * verify.
 *
 * Speed - O(n)
 *   1 pass through input
 *
 * Pros:
 *   Super fast
 *
 * Cons:
 *   A bit more verbose than split-reverse
 *   Couple of places to trip up on in for-loop logic
 */
export function palindrome2(str) {
  let holder = "";

  for (let i = str.length - 1; i >= 0; i--) {
    holder += str.charAt(i);
  }

  return holder === str;
}
palindrome2.testname = "for loop";

/**
 * Build a new string from scratch, iterating over each character in input
 * string and prepending to holding string. Compare holding string to input to
 * verify.
 *
 * Speed - O(n)
 *   1 pass through input
 *
 * Pros:
 *   Super fast
 *   Easier to understand than for-loop
 *
 * Cons:
 *   A bit more verbose than split-reverse
 */
export function palindrome3(str) {
  let reversed = "";

  for (const char of str) {
    reversed = char + reversed;
  }

  return reversed === str;
}
palindrome3.testname = "for..of loop";

/**
 * Convert string to array and then call the every method, comparing each
 * character to its respective character from the end.
 * E.g.
 *  0 - racecar
 *      ^     ^
 *  1 - racecar
 *       ^   ^
 *  2 - racecar
 *        ^ ^
 *
 * Speed - O(n2)
 *   1 pass to split
 *   1 pass for `every` method
 *
 * Pros:
 *   Faster than split-reverse
 *
 * Cons:
 *   More verbose than split-reverse
 *   Confusing syntax if unfamiliar
 *   Slower than loop methods
 */
export function palindrome4(str) {
  return str
    .split("")
    .every((char, i) => char === str.charAt(str.length - 1 - i));
}
palindrome4.testname = "arr.every";
