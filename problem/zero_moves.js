var moveZeroes = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        if (element === 0) {
            for (let j = i+1; j < nums.length; j++) {
                const element1 = nums[j];
                if (element1 !== 0) {
                    nums[i] = element1
                    nums[j] = 0
                    break
                }
            }
        }
    }
    console.log(nums)
};
const arr = [0, 0, 1]

const arr1 = [1, 0, 3, 12, 0, 2, 0]
moveZeroes([0,1,0,3,12])


