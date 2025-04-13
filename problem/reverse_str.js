// create a function that takes a string as input and returns the reversed version of the string
// example: reverseString('hello') returns 'olleh'

function reverse(str = '') {
    if (str === '') {
        console.log('Empty str')
        return
    }
    if (typeof str !== 'string') {
        console.log('Provide valid string')
        return
    }
    let rev = ''
    for (let i = str.length-1; i >= 0; i--){
        rev += str[i]
    }
    console.log(rev)
    return rev
}
reverse('Hi, i am rayhan')


function reverse2(str) {
    return str.split('').reverse().join('')
}
console.log(reverse2('Hi, i am rayhan'))

const reverse3 = (str) => str.split('').reverse().join('')
console.log(reverse3('Hi, i am rayhan'))


const reverse4 = (str) => [...str].reverse().join('')
// console.log(reverse4('Hi, i am rayhan'))

