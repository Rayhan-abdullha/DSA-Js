

var findDuplicates = function(arr) {
    const occur = {}
    for (let element of arr){
        occur[element] = (occur[element] || 0) + 1
    }
    const occurrences = [...Object.values(occur)]
    const isOccur = new Set(occurrences)
    if (occurrences.length !== isOccur.size){
        return false
    } else {
        return true
    }
};
const nums = [1,2,2,1,1,3]
console.log(findDuplicates(nums))