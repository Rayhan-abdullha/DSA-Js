
/**
 * @param {Array} arr
 */

function symmetricDifference(arr, arr1) {
    const unique = new Set()
    
    for (const element of arr) {
        if (!unique.has(element)) {
            unique.add(element)
        }
    }
    for (const element of arr1) {
        if (unique.has(element)) {
            unique.delete(element)
        } else {
            unique.add(element)
        }
    }
    return Array.from(unique.values())
}
const arr = [1, 2, 3]
const arr1 = [3, 4, 5 ]
console.log(symmetricDifference(arr, arr1))

