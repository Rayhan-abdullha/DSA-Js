var areOccurrencesEqual = function (s) {
    let obj = {}
    for (let i = 0; i < s.length; i++){
        obj[s[i]] = obj[s[i]] ? obj[s[i]] + 1 : 1
    }
    let res = false
    let isSame = null
    for (let key in obj) {
        if (isSame == null) {
            isSame = obj[key]
        } else if (isSame !== obj[key]) {
            res = false
            return res
        } else {
            res = true
        }
    }
    return true
};
console.log(areOccurrencesEqual('aabb'))