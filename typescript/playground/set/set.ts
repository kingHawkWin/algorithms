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

const set: Set<number> = new Set() // create

set.add(1)
console.log(set)
console.log(set.has(1))
set.delete(1)
console.log(set)
set.add(1)
set.add(2)
console.log(set)
console.log(set.size)

// traversal
console.log(set.keys())
console.log(set.values())
console.log(set.entries())
set.forEach((v, k, s) => {
  console.log(`${v} - ${k} - ${s}`)
})
