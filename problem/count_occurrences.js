function countOccurrences(str = '', char = '') {
    if (!str || !char) {
        return 'str and char is required'
    }
    return str.indexOf(char) === -1 ? 0 : str.indexOf(char)
}

console.log(countOccurrences('rayhan', 'ya'))

// another 
function countOccurrences1(str = '', char = '') {
    if (!str || !char) {
        return 'str and char is required'
    }
    const findIndex = str.split('').findIndex(c => c === char)
    return findIndex === -1 ? 0 : findIndex
}

console.log(countOccurrences1('rayhan', 'h'))

// another
function countOccurrences2(str = '', char = '') {
    if (!str || !char) {
        return 'str and char is required'
    }
    for (let i = 0; i < str.length; i++){
        if (str[i] === char) {
            return i
        }
    }
    return 0
}

console.log(countOccurrences2('rayhan', 'l'))

const countOccurrences3 = (str, char) => str.split(char);
console.log(countOccurrences3('coder', 'c'))