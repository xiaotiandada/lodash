function chunk (array, size)  {
  // 获取size, 如果小于0 取值为0
  size = Math.max(size, 0)
  // 获取数组长度 如果是null 为0, 否则为数组长度
  const length = array === null ? 0 : array.length
  // 如果没有长度或者切割小于0返回[]
  if (!length || size < 1) {
    return []
  }
  // 开始 index
  let index = 0
  // 数组 index
  let resIndex = 0

  // 数组数据 new Array 长度为 length/size 向上取整
  const result = new Array(Math.ceil(length / size))

  // 数组每个下标添加内容 开始index index+=size 结束index
  while (index < length) {
    // 这里的 _.slice 使用了 array.slice 代替
    result[resIndex++] = array.slice(index, index+=size)
  }
  return result
}

// const resChunk = chunk([1,2,3,4,5,6,7], 2)
// console.log(resChunk);


function chunkLite(array, size) {
  // 获取长度
  const length = array.length
  // 如果没有长度或者切割小于0返回[]
  if (!length || size < 1) return []
  let index = 0 // 开始 index
  let resIndex = 0 // 数组 index
  let result = [] // 数组数据
  // 循环 开始的索引小于数组长度执行
  // 数组每个下标添加内容 开始index index+=size 结束index
  while(index < length) result[resIndex++] = array.slice(index, index+=size)
  return result
}

const resChunkLite = chunkLite([1,2,3,4,5,6,7], 1)
console.log(resChunkLite);
const resChunkLite1 = chunkLite([1,2,3,4,5,6,7], 2)
console.log(resChunkLite1);
const resChunkLite2 = chunkLite([1,2,3,4,5,6,7], 3)
console.log(resChunkLite2);
const resChunkLite3 = chunkLite([1,2,3,4,5,6,7], 4)
console.log(resChunkLite3);
const resChunkLite4 = chunkLite([1,2,3,4,5,6,7], 5)
console.log(resChunkLite4);