// Merge Sorted Array 

const arr = [1, 2, 4]
const arr1 = [3, 5, 6]

/**
 * 
 * @param {Array} arr 
 * @param {Array} arr1 
 */
function mergeSortedArray1(arr, arr1) {
    let mergedArray = [...arr, ...arr1]
    mergedArray.sort((a, b) => a - b)
    return mergedArray
}

function mergeSortedArray2(arr, arr1) {;
    if (!arr.length && !arr1.length) {
        console.log('array is required!')
        return
    }
    const sortedArr = []
    arr.forEach(item => {
        sortedArr.push(item)
    })
    arr1.forEach(item => {
        sortedArr.push(item)
    })
    sortedArr.sort((a, b) => a - b)
    return sortedArr
}
console.log(mergeSortedArray1(arr, arr1))

