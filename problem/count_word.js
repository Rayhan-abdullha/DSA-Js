const string = "Hi, i am rayhan abdullah, i am a student, every student had a great opportunity"

function wordCounter(str = '') {
    if (!str || str == '') {
        console.error('input string is required!')
    }
    if (typeof str !== 'string') {
        console.error('input type is in valid, provide string!')
    }
    const words = str.split(' ')
    const freq = new Map()
    for (const word of words) {
        if (freq.has(word)) {
            console.log( freq.get(word))
            freq.set(word, (freq.get(word) + 1))
        } else {
            freq.set(word, 1)
        }
    }
    console.log(freq)
}
wordCounter(string)
