const arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const arr3 = [1, 2, 3, 4, 5, true, 1, 'hello', 2, 3, 'hello', true]
function removeDuplicates(arr) {
    return Array.from(new Set(arr));
}

// console.log(removeDuplicates(arr))
// console.log(removeDuplicates(arr2))
// console.log(removeDuplicates(arr3))

// another solution
/**
 * 
 * @param {Array} arr 
 * @returns {Array}
 */
function removeDuplicates1(arr) {
    const removeDub = new Map()
    for (const val of arr) {
        removeDub.set(val, val)
    }
    return Array.from(removeDub.keys())
}
// console.log(removeDuplicates1(arr))
console.log(removeDuplicates1(arr2))
console.log(removeDuplicates1(arr3))

function removeDuplicates2(arr) { 
    const unique = []
    arr.forEach(v => {
        if (!unique.includes(v)) {
            unique.push(v)
        }
    })
    return unique
}
removeDuplicates2(arr)
removeDuplicates2(arr2)
removeDuplicates2(arr3)