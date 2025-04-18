/**
 * 
 * @param {string} str 
 * @returns {string}
 */
function reverseString(str) {
    let revStr = ''
    for (let i = str.length - 1; i >= 0; i--) {
        const char = str[i];
        revStr += char
    }
    return revStr
}
// console.log(reverseString(''))

/**
 * 
 * @param {string} str 
 * @returns {string}
 */
function reverseString1(str) {
    return str.split('').reverse().join('')
}
console.log(reverseString1('hello'))