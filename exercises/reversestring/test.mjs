import * as methods from "./";

describe.suite("reversestring", methods, (reverseString) => {
  test("reverses a string", () => {
    expect(reverseString("abcd")).toEqual("dcba");
  });

  test("reverses a string with whitespace", () => {
    expect(reverseString("  abcd")).toEqual("dcba  ");
  });
});
