// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

export const data = ["abcccccccd"];

/**
 * Loops through the given input and builds a map of characters that appear in
 * the input, and keeps count of how often they appear
 *
 * Speed - O(n2)
 *   1 pass over the input
 *   1 pass over the map to check sizes
 */
export function maxChar(str) {
  const map = {};
  let max = 0;
  let maxChar = "";

  for (const char of str) {
    map[char] = (map[char] || 0) + 1;
  }

  for (const key in map) {
    if (map[key] > max) {
      maxChar = key;
      max = map[key];
    }
  }

  return maxChar;
}
maxChar.testname = "for..of loop";
