// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

export const data = [-4894];

/**
 * Converts the input to a string, splits it into an array, reverses the array,
 * rejoins it as a string, converts it back to a number and then multiplies it
 * by the output of Math.sign (either a 1 or -1) to restore original sign.
 *
 * Speed - O(n3)
 *   1 pass to split
 *   1 pass to reverse
 *   1 pass to join
 *
 * Pros
 *   Somewhat simple and self-explanatory code
 *
 * Cons
 *   Slow due to number of operations required - loops and type convesion.
 */
export function reverseInt(n) {
  const rev = n.toString().split("").reverse().join("");

  return parseInt(rev, 10) * Math.sign(n);
}
reverseInt.testname = "Naive solution";
