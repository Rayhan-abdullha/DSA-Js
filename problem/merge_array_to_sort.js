// Merge two array to sort

const arr = [10, 24, 4]
const arr1 = [40000, 500, 6]

function mergeSortedArray1(arr, arr1) {
    if (!arr.length && !arr1.length) {
        console.log('array is required!')
        return 
    }
    return [...arr, ...arr1].sort((a, b) => a - b)
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

