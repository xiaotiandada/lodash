/**
 * Creates a slice of `array` from `start` up to, but not including, `end`.
 *
 * **Note:** This method is used instead of
 * [`Array#slice`](https://mdn.io/Array/slice) to ensure dense arrays are
 * returned.
 *
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position. A negative index will be treated as an offset from the end.
 * @param {number} [end=array.length] The end position. A negative index will be treated as an offset from the end.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * var array = [1, 2, 3, 4]
 *
 * _.slice(array, 2)
 * // => [3, 4]
 */
function slice(array, start, end) {
  // 返回长度
  let length = array == null ? 0 : array.length
  if (!length) {
    return []
  }
  // 开始 结束 的坐标
  start = start == null ? 0 : start
  end = end === undefined ? length : end

  // 计算开始坐标
  if (start < 0) {
    start = -start > length ? 0 : (length + start)
  }
  // 计算结束坐标
  end = end > length ? length : end
  if (end < 0) {
    end += length
  }
  // 计算长度
  // >>> 转换
  // 如果不能转换为Number，那就为0
  // 如果为非整数，先转换为整数
  // 如果是正数，返回正数，如果是负数，返回负数 + 2的32次方
  length = start > end ? 0 : ((end - start) >>> 0)
  // Uncaught SyntaxError: Invalid left-hand side in assignment
  // 左侧需要为一个变量
  start >>>= 0

  let index = -1
  const result = new Array(length)
  while (++index < length) {
    result[index] = array[index + start]
  }
  return result
}

export default slice