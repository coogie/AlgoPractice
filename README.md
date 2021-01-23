# Common Algos

Exercises, solutions, and benchmarks to common algorithms and whiteboarding
questions.

## Overview

### Testing

Each problem has its own folder dedicated to it, along with a test suite to
verify expected outcomes. This test file uses a custom `describe` method which
will allow me to pass in an arbitrary number of methods from the index file
(imported as `import * as ...`) and execute the same suite of tests across each
exported method without having to duplicate tests.

```
$ npm test reversestring

 PASS  exercises/reversestring/test.mjs

reversestring
    Naive Reverse
      √ reverses a string (2 ms)
      √ reverses a string with whitespace
    for loop
      √ reverses a string
      √ reverses a string with whitespace (1 ms)
    for..of loop
      √ reverses a string
      √ reverses a string with whitespace
    arr.reduce
      √ reverses a string
      √ reverses a string with whitespace

Test Suites: 1 passed, 1 total
Tests:       8 passed, 8 total
Snapshots:   0 total
Time:        0.558 s, estimated 1 s
Ran all test suites matching /reversestring/i.

Active Filters: filename /reversestring/
```

### Benchmarking

Each exercise is also benchmarkable thanks to [BenchmarkJS][1]. Similar to the
test suite setup, benchmarking is also set up to run benchmarks on all exported
methods. The only restriction being that each exercise file _must_ have an
`export const data` with the argument value to be passed to the methods being
benchmarked.

Optionally, each method can have a descriptive `testname` property which will be
used in the benchmarking output. If not present, the function name will be used
instead.

```
$ npm run bench reversestring

  ┌ Running "reversestring" benchmarks...
  ├─ Naive Reverse x 3,072,077 ops/sec ±0.31% (94 runs sampled)
  ├─ for loop x 11,899,016 ops/sec ±0.77% (90 runs sampled)
  ├─ for..of loop x 9,729,595 ops/sec ±1.82% (86 runs sampled)
  ├─ arr.reduce x 6,032,047 ops/sec ±0.76% (91 runs sampled)
  └ Done!

Fastest is "for loop"
```

[1]: https://benchmarkjs.com/
