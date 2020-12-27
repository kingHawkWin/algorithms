/*
[
  'has',
  'add',
  'delete',
  'clear',
  'entries',
  'forEach',
  'size',
  'values',
  'keys',
]
 */

const rawSet: Set<number> = new Set() // create

rawSet.add(1)
console.log(rawSet)
console.log(rawSet.has(1))
rawSet.delete(1)
console.log(rawSet)
rawSet.add(1)
rawSet.add(2)
console.log(rawSet)
console.log(rawSet.size)

// traversal
console.log(rawSet.keys())
console.log(rawSet.values())
console.log(rawSet.entries())
rawSet.forEach((v, k, s) => {
  console.log(`${v} - ${k} - ${s}`)
})
