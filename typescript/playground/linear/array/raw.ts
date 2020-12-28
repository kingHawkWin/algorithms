// length
console.log('---- length ----')
const arrayLength = [1, 2, 3]
const size = arrayLength.length
console.log(size)
console.log()

// assertion
console.log('---- assertion ----')
const arrayAssertion = [1, 2, 3]
const isArray = Array.isArray(arrayAssertion)
console.log(isArray)
const arrayIncludes = arrayAssertion.includes(3, 2)
console.log(arrayIncludes)
console.log('-- some')
const arrayAssertionSome = arrayAssertion.some((v, k, a) => v > 1)
console.log(arrayAssertion, arrayAssertionSome) // pass by value
console.log('-- every')
const arrayAssertionEvery = arrayAssertion.every((v, k, a) => v === 0)
console.log(arrayAssertion, arrayAssertionEvery) // pass by value
console.log()

// create
console.log('---- create ----')
const arrayFrom = Array.from([1, 2, 3])
const arrayOf = Array.of(1, 2, 3)
console.log(arrayFrom)
console.log(arrayOf)
console.log()

// insert
console.log('---- insert ----')
const arrayInsert = []
const arrayUnshift = arrayInsert.unshift(1, 2, 3)
console.log(arrayUnshift, arrayInsert)
const arrayPush = arrayInsert.push(5, 6, 7)
console.log(arrayPush, arrayInsert)
const arrayInsertSplice = arrayInsert.splice(3, 0, 4)
console.log(arrayInsertSplice, arrayInsert)
console.log()

// remove
console.log('---- remove ----')
const arrayRemove = [1, 2, 3]
const arrayShift = arrayRemove.shift()
console.log(arrayShift, arrayRemove)
const arrayPop = arrayRemove.pop()
console.log(arrayPop, arrayRemove)
const arrayRemoveSplice = arrayRemove.splice(0, 1)
console.log(arrayRemoveSplice, arrayRemove)
console.log()

// search
console.log('---- search ----')
const arraySearch = [1, 2, 3]
const arrayIndexOf = arraySearch.indexOf(1)
console.log(arrayIndexOf)
const arrayLastIndexOf = arraySearch.lastIndexOf(4)
console.log(arrayLastIndexOf)
const arrayFind = arraySearch.find((v, k, a) => v > 1) // 返回符合要求的第一个项
console.log(arrayFind)
const arrayFindIndex = arraySearch.findIndex((v, k, a) => v > 1) // 返回符合要求的第一个项的下标
console.log(arrayFindIndex)
console.log()

// extract
console.log('---- extract ----')
const arrayExtract = [1, 2, 3]
const arrayKeys = arrayExtract.keys() // iterator
console.log(Array.of(...arrayKeys))
const arrayValues = arrayExtract.values() // iterator
console.log(Array.of(...arrayValues))
const arrayEntries = arrayExtract.entries() // iterator
console.log(Array.of(...arrayEntries))
console.log()

// traversal
console.log('---- traversal ----')
const arrayTraversal = [1, 2, 3]
console.log('-- forEach')
arrayTraversal.forEach((v, k, a) => {
  console.log(v, k, a)
}) // 没有返回值
console.log('-- map')
const arrayTraversalMap = arrayTraversal.map((v, k, a) => ++v) // pass by value
console.log(arrayTraversal, arrayTraversalMap)
console.log('-- filter')
const arrayTraversalFilter = arrayTraversal.filter((v, k, a) => v === 3) // pass by value
console.log(arrayTraversal, arrayTraversalFilter)
console.log('-- reduce')
const arrayTraversalReduce = arrayTraversal.reduce((vp, vn, k, a) => {return vp - vn}, 10) // 10 - 1 - 2 - 3
console.log(arrayTraversal, arrayTraversalReduce)
console.log('-- reduceRight')
const arrayTraversalReduceRight = arrayTraversal.reduceRight((vn, vp, k, a) => {return vn - vp}, 10) // 10 - 3 - 2 - 1
console.log(arrayTraversal, arrayTraversalReduceRight)
console.log()

// operation
console.log('---- operation ----')
const arrayOperation = [1, 2, 3]
const arrayFill = arrayOperation.fill(4, 1, 2) // 在当前数组长度的范围内填充 pass by ref
console.log(arrayOperation, arrayFill)
const arrayReverse = arrayOperation.reverse() // pass by ref
console.log(arrayOperation, arrayReverse)
const arraySort = arrayOperation.sort((a, b) => b - a) // pass by ref
console.log(arrayOperation, arraySort)
const arraySlice = arrayOperation.slice(0, 2)
console.log(arrayOperation, arraySlice) // pass by value
const arrayConcat = arrayOperation.concat(4, 5, 6, [7, 8, 9])
console.log(arrayOperation, arrayConcat)
const arrayFlat = [[1, 2, 3], [4, 5, [6]]].flat(10)
console.log(arrayFlat)
const arrayFlatMap = [[1, 2, 3], [4, 5, [6]]].flatMap((v, k, a) => v.toLocaleString())
console.log(arrayFlatMap)
const arrayCopyWithin = arrayOperation.copyWithin(0, 0, 10) // pass by ref
console.log(arrayOperation, arrayCopyWithin)
console.log()

// transfer
console.log('---- transfer ----')
const arrayTransfer = [1, 2, 3]
const arrayToString = arrayTransfer.toString()
console.log(arrayToString)
const arrayToLocaleString = arrayTransfer.toLocaleString()
console.log(arrayToLocaleString)
const arrayJoin = arrayTransfer.join(' *** ')
console.log(arrayJoin)
