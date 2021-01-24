import { jest } from "@jest/globals";
import * as methods from "./";

const { log } = console;

describe.suite("fizzbuzz", methods, (fizzBuzz) => {
  beforeAll(() => {
    console.log = jest.fn();
  });

  afterAll(() => {
    console.log = log;
  });

  test("Calling fizzbuzz with `5` prints out 5 statements", () => {
    fizzBuzz(5);

    expect(console.log).toHaveBeenCalledTimes(5);
  });

  test("Calling fizzbuzz with `15` prints out the correct values", () => {
    fizzBuzz(15);

    expect(console.log).toHaveBeenNthCalledWith(1, 1);
    expect(console.log).toHaveBeenNthCalledWith(2, 2);
    expect(console.log).toHaveBeenNthCalledWith(3, "fizz");
    expect(console.log).toHaveBeenNthCalledWith(4, 4);
    expect(console.log).toHaveBeenNthCalledWith(5, "buzz");
    expect(console.log).toHaveBeenNthCalledWith(6, "fizz");
    expect(console.log).toHaveBeenNthCalledWith(7, 7);
    expect(console.log).toHaveBeenNthCalledWith(8, 8);
    expect(console.log).toHaveBeenNthCalledWith(9, "fizz");
    expect(console.log).toHaveBeenNthCalledWith(10, "buzz");
    expect(console.log).toHaveBeenNthCalledWith(11, 11);
    expect(console.log).toHaveBeenNthCalledWith(12, "fizz");
    expect(console.log).toHaveBeenNthCalledWith(13, 13);
    expect(console.log).toHaveBeenNthCalledWith(14, 14);
    expect(console.log).toHaveBeenNthCalledWith(15, "fizzbuzz");
  });
});
