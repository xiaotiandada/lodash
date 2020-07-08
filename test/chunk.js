import chunk from '../chunk.js'
const assert = require('assert');

describe('Chunk', function() {
  let array = [0, 1, 2, 3, 4];

  it("should return chunked arrays", function() {
    let actual = chunk(array, 2);
    assert.deepStrictEqual(actual, [[0, 1], [2, 3], [4]]);
  })
  it("should return chunked arrays", function() {
    let actual = chunk(array, 3);
    assert.deepStrictEqual(actual, [[0, 1, 2], [3, 4]]);
  })
})