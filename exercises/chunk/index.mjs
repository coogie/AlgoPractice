// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

export const data = [[1, 2, 3, 4, 5, 6, 7, 8], 3];

/**
 * Using nested loops - one outer while loop for long-running processing and an
 * internal forloop to handle chunking of arrays. Outer master chunks array is
 * populated with s smaller subChunk array created with each iteration of the
 * while loop.
 *
 * Speed - O(n)
 *   Not quadratic in speed since no loop repeats, we will only be passing over
 *   the input array items once (thanks to master idx value)
 *
 * Pros
 *   Fast
 *   Straightforward to understand
 *
 * Cons
 *   Verbose
 *   Dangerous use of while loop can lead to problems
 */
export function chunk(array, size) {
  let idx = 0;
  const chunked = [];
  while (idx < array.length) {
    let subChunk = [];
    for (let i = 0; i < size; i++) {
      if (array[idx + i]) subChunk.push(array[idx + i]);
    }
    chunked.push(subChunk);
    idx += size;
  }
  return chunked;
}
chunk.testname = "while with forloop";

/**
 * Single loop implementation which checks if the last subchunk is length < size
 * and places current item in it if true. If not, pushes a new subchunk into the
 * chunks array with an initial value of current item.
 *
 * Speed - O(n)
 *   Single pass over the input array
 *
 * Pros
 *   Fast
 *   Straightforward to understand
 *
 * Cons
 *   Slower than while + forloop, although not sure why just yet
 *     Suspect it may have to do with null checking - `if (chunk && ...)`
 */
export function chunk2(array, size) {
  const chunked = [];
  for (let i = 0; i < array.length; i++) {
    const chunk = chunked[chunked.length - 1];
    if (chunk && chunk.length < size) {
      chunk.push(array[i]);
    } else {
      chunked.push([array[i]]);
    }
  }
  return chunked;
}
chunk2.testname = "single forloop";

/**
 * Same approach as "single forloop", but with a for..of loop and inverted
 * value checking.
 */
export function chunk3(array, size) {
  const chunked = [];
  for (const element of array) {
    const last = chunked[chunked.length - 1];

    if (!last || last.length === size) {
      chunked.push([element]);
    } else {
      last.push(element);
    }
  }
  return chunked;
}
chunk3.testname = "for..of loop";

/**
 * While loop that waits for our master index variable to reach the size of the
 * input array. We create a new array, with slice, of items from idx to
 * idx + size and push that new array into our chunk tracker.
 *
 * Speed - O(n)
 *
 * Pros
 *   Fast
 *   Very easy to read and understand
 */
export function chunk4(array, size) {
  let idx = 0;
  const chunked = [];
  while (idx < array.length) {
    const chunk = array.slice(idx, idx + size);
    chunked.push(chunk);
    idx += size;
  }
  return chunked;
}
chunk4.testname = "while with arr.slice";
