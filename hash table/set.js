/**
 * 
 * @param {Array} arr 
 */

// time complexity will be order of O(n) not O(n^2)
function removeDuplicates1(arr) {
    return [...new Set(arr).values()]
}


const arr2 = [1,1,1,2,3,4,3,3]
console.log(removeDuplicates1(arr2))