/**
 * 
 * @param {string[]} arr
 * @returns {string[][]} 
 */
function anagramGroups(arr) {
    const ana = new Map()
    for (let name of arr) {
        const n = name.split('').sort().join('')
        if (ana.has(n)) {
            const a = ana.get(n)
            a.push(name)
            ana.set(n, a)
        } else {
            ana.set(n, [name])
        }
    }
    return Array.from(ana.values())

}
const arr = [
    'madam',
    'damam',
    'khoka',
    'messi',
    'issem'
]
console.log(anagramGroups(arr))