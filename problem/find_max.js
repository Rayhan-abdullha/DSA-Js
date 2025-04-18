/**
 * 
 * @param {Array} nums
 * @returns {number} 
 */

function findMaxNumber(nums) {
    if (!nums || !nums.length) {
        return 'Array is required!'
    }
    if (nums.length === 1) {
        return nums[0]
    }
    nums.sort((a,b) => a - b)
    return nums[nums.length- 1]
}
const arr = [22, 33, 4, 100, 3, 1000]
const res = findMaxNumber(arr)
console.log(res)

/**
 * 
 * @param {Array} nums
 * @returns {number} 
 */
function findMaxNumber1(nums) {
    if (!nums || !nums.length) {
        return 'Array is required!'
    }
    if (nums.length === 1) {
        return nums[0]
    }
    let res = nums[0]
    for (let i = 1; i < nums.length; i++){
        if (res < nums[i]) {
           res = nums[i]
       }
    }
return res
}
const res1 = findMaxNumber1(arr)
console.log(res1)

/**
 * 
 * @param {Array} nums
 * @returns {number} 
 */
function findMaxNumber2(nums) {
    if (!nums || !nums.length) {
        return 'Array is required!'
    }
    if (nums.length === 1) {
        return nums[0]
    }
    return Math.max(...nums)
}
console.log(findMaxNumber2(arr))