import * as methods from "./";

const matrix = [
  ["aba", true],
  [" aba", false],
  ["aba ", false],
  ["greetings", false],
  ["1000000001", true],
  ["Fish hsif", false],
  ["pennep", true],
];

describe.suite("palindrome", methods, (palindrome) => {
  test.each(matrix)('"%s" should be %s', (input, expected) => {
    expect(palindrome(input)).toBe(expected);
  });
});
