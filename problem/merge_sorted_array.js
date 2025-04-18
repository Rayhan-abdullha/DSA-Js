// Merge two Sorted Array in one Sorted Array

const arr = [10, 20, 40, 40, 50]
const arr1 = [11, 11, 16]

/**
 * 
 * @param {Array} arr 
 * @param {Array} arr1 
 */


function mergeSortedArray(arr, arr1) {
    if (!arr.length && !arr1.length) {
        console.log('array is required!')
        return
    }
    const mergeArray = []
    let i = 1
    let j = 1
    let item = arr[0]
    let item1 = arr1[0]
    while (item || item1) {
        console.log('item = ', item)
        console.log('item1 = ', item1)
        if (!item1 || item < item1) {
            mergeArray.push(item)
            item = arr[i]
            i++
        } else {
            mergeArray.push(item1)
            item1 = arr1[j]
            j++
        }
        console.log(mergeArray)
    }
    
    return mergeArray
}

console.log(mergeSortedArray(arr, arr1))