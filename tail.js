/**
 * Gets all but the first element of `array`.
 *
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to query.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * tail([1, 2, 3])
 * // => [2, 3]
 */
function tail(array) {
  const length = array == null ? 0 : array.length
  if (!length) {
    return []
  }
  // 利用解构赋值
  const [, ...result] = array
  return result
}

export default tail