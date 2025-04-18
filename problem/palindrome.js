/**
 * 
 * @param {string} str 
 * @returns 
 */
function isPalindrome(str) {
    if (!str) {
        return 'str is not defined'
    }
    let p = ''
    for (let i = 0; i < str.length; i++) {
       p += str[i]
    }
    if (p === str) {
        return true
    }
    return false
}
console.log(isPalindrome('madam'))

function isPalindrome1(str) {
    if (!str) {
        return 'str is not defined'
    }
    let left = 0
    let right = str.length -1 
    while (left <= right) {
        if (str[left] !== str[right]) {
            return false
        }
        left++
        right--
    }
    return true
}
console.log(isPalindrome1('cooc'))