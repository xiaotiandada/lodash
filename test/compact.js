import compact from '../compact.js'
const assert = require('assert')

describe('Compact', function() {
  let array = [0, 1, false, 2, '', 3]

  it("should return arrays", function() {
    let actual = compact(array)
    assert.deepStrictEqual(actual, [1, 2, 3])
  })
})