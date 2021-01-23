// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

export const data = "Greetings!";

/**
 * Convert the string to an array, then call the .reverse method on the array.
 * Finally, join the array back together as a single string.
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
export function reverse(str) {
  return str.split("").reverse().join("");
}
reverse.testname = "Naive Reverse";

/**
 * Build a new string from scratch, iterating over input from end until start,
 * appending each char to the holding string.
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
export function reverse2(str) {
  let holder = "";
  for (let i = str.length - 1; i >= 0; i--) {
    holder += str.charAt(i);
  }
  return holder;
}
reverse2.testname = "for loop";

/**
 * Build a new string from scratch, iterating over each character in input
 * string and prepending to holding string.
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
export function reverse3(str) {
  let holder = "";
  for (const char of str) {
    holder = char + holder;
  }
  return holder;
}
reverse3.testname = "for..of loop";

/**
 * Convert string to array and then call the reduce method to rebuild it similar
 * to how for..of loop method.
 *
 * Speed - O(n2)
 *   1 pass to split
 *   1 pass to reduce
 *
 * Pros:
 *   Faster than split-reverse
 *
 * Cons:
 *   More verbose than split-reverse
 *   Confusing syntax if unfamiliar
 *   Slower than loop methods
 */
export function reverse4(str) {
  return str.split("").reduce((rev, char) => char + rev, "");
}
reverse4.testname = "arr.reduce";
