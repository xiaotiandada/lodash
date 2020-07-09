const assert = require('assert');

import chunk from '../chunk.js'
import compact from '../compact.js'
import drop from '../drop.js'
import dropRight from '../dropRight.js'
import after from '../after'
import before from '../before'
import defer from '../defer'
import delay from '../delay'
import memoize from '../memoize'

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

describe('after', function() {
  it("use after", function() {

    const saves = ['profile', 'settings']
    const done = after(saves.length, () => console.log('done saving!'))

    done()
    done()
    
  })
})

describe('before', function() {
  it("use before", function() {

    let done = before(3, () => console.log('done before'))

    done()
    done()
    done()
    done()

  })
})

describe('defer', function() {
  it("use defer", function() {

    defer((text) => console.log('done defer', text), 'deferred')

  })
})

describe('delay', function() {
  it("use delay", function() {

    delay((text) => console.log('done delay', text), 1000, 'later')

  })
})

describe('memoize', function() {
  it("use memoize", function() {

    let i = memoize(i => i * 2)
    i(2)
    i(33)

  })
})