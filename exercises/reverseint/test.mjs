import * as methods from "./";

describe.suite("reverseint", methods, (reverseInt) => {
  test("handles 0 as an input", () => {
    expect(reverseInt(0)).toEqual(0);
  });

  test("flips a positive number", () => {
    expect(reverseInt(5)).toEqual(5);
    expect(reverseInt(15)).toEqual(51);
    expect(reverseInt(90)).toEqual(9);
    expect(reverseInt(2359)).toEqual(9532);
  });

  test("flips a negative number", () => {
    expect(reverseInt(-5)).toEqual(-5);
    expect(reverseInt(-15)).toEqual(-51);
    expect(reverseInt(-90)).toEqual(-9);
    expect(reverseInt(-2359)).toEqual(-9532);
  });
});
