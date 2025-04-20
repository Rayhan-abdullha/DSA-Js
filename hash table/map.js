const myMap = new Map()

myMap.set(1, 113)
myMap.set(12, 12)
myMap.set(11, 11)
myMap.set(13, 10)
const myMap1 = myMap.entries()
const a = myMap1.next().value
console.log(a[0], a[1])