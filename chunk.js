import { slice, toInteger } from 'lodash'

/**
 * Creates an array of elements split into groups the length of `size`.
 * If `array` can't be split evenly, the final chunk will be the remaining
 * elements.
 *
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to process.
 * @param {number} [size=1] The length of each chunk
 * @returns {Array} Returns the new array of chunks.
 * @example
 *
 * chunk(['a', 'b', 'c', 'd'], 2)
 * // => [['a', 'b'], ['c', 'd']]
 *
 * chunk(['a', 'b', 'c', 'd'], 3)
 * // => [['a', 'b', 'c'], ['d']]
 */


function chunk (array, size = 1) {
  // toInteger 返回转换后的整数
  size = Math.max(toInteger(size), 0)
  // 返回数组的长度
  const length = array == null ? 0 : array.length

  // 判断 length 和 size
  if (!length || size < 1) {
    return []
  }
  // 索引
  let index = 0
  let resIndex = 0
  // 结果数组
  const result = new Array(Math.ceil(length / size))
  
  while(index < length) {
    // 代替 Array slice
    result[resIndex++] = slice(array, index, ( index += size ))
  }
  return result
}

export default chunk