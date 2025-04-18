function titleCase(str) {
    if (!str || typeof str !== 'string') {
        return 'Provide valid input!'
    }
    str = str.toLowerCase()
    let res = ''
    for (let i = 0; i < str.length; i++){
        if (i === 0) {
            res = str[i].toUpperCase()
        }
        else if (str[i] === ' ') {
            res += str[i]
            res += str[i + 1].toUpperCase()
            i++
        } else {
            res += str[i]
        }
    }
    return res
}
const res = titleCase('Here IS my code')
// console.log(res)

/**
 * 
 * @param {string} str 
 */
function titleCase1(str) {
    if (!str || typeof str !== 'string') {
        return 'Provide valid input!'
    }
    str = str.toLowerCase().split(' ')
    for (let i = 0; i < str.length; i++){
        str[i] = str[i][0].toUpperCase() + str[i].slice(1)
    }
    return str
}
console.log(titleCase1('sHoRt AnD sToUt'))