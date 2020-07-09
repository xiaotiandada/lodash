
/**
 * Creates a function that invokes `func` with its arguments transformed.
 *
 * @since 4.0.0
 * @category Function
 * @param {Function} func The function to wrap.
 * @param {Function[]} [transforms=[identity]]
 *  The argument transforms.
 * @returns {Function} Returns the new function.
 * @example
 *
 * function doubled(n) {
 *   return n * 2
 * }
 *
 * function square(n) {
 *   return n * n
 * }
 *
 * const func = overArgs((x, y) => [x, y], [square, doubled])
 *
 * func(9, 3)
 * // => [81, 6]
 *
 * func(10, 5)
 * // => [100, 10]
 */
function overArgs(func, transforms) {
  // 获取长度
  const funcsLength = transforms.length
  return function(...args) {
    let index = -1
    // 获取最小的参数长度
    const length = Math.min(args.length, funcsLength)
    // 循环
    while (++index < length) {
      // 处理的参数 = 需要处理的方法index获取 参数index获取
      args[index] = transforms[index].call(this, args[index])
    }
    // 执行方法
    return func.apply(this, args)
  }
}

export default overArgs