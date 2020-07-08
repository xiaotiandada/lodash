const assert = require('assert');

import chunk from '../chunk.js'
import compact from '../compact.js'
import drop from '../drop.js'
import dropRight from '../dropRight.js'

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

describe('Compact', function() {
  let array = [0, 1, false, 2, '', 3]

  it("should return arrays", function() {
    let actual = compact(array)
    assert.deepStrictEqual(actual, [1, 2, 3])
  })
})

describe('Drop', function() {
  let array = [1, 2, 3]

  it("should return arrays", function() {
    let actual = drop(array, 2)
    assert.deepStrictEqual(actual, [3])
  })
})

describe('dropRight', function() {
  let array = [1, 2, 3]

  it("should return arrays", function() {
    let actual = dropRight(array, 2)
    assert.deepStrictEqual(actual, [1])
  })
})