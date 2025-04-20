
const arr = [[1, 2, 3], [3, 4,5 ]]

function removeDublicate(arr) {
    const s = new Map()
    arr.forEach(v => {
        v.forEach(k => {
            if (s.has(k)) {
                s.set(k, s.get(k)+1)
            } else {
                s.set(k, 1)
            }
        })
    })
    const a = Array.from(s)
    const res = a.reduce((acc, curr) => {
        if (curr[1] === 1) {
            acc.push(curr[0])
        }
        return acc
    }, [])
    console.log(res)
}
removeDublicate(arr)


function removeDublicate1([a, b]) {
    const res = []
    for (const v of a) {
        if (!b.includes(v)) {
            res.push(v)
        } else {
            const f = b.indexOf(v)
            b[f] = null
        }
    }
    for (const v of b) {
        if (v) {
            res.push(v)
        }
    }
    console.log(res)
 }
removeDublicate1(arr)
 
function removeDublicate3(arr) {
    const res = new Set()
    arr.forEach(ar => {
        ar.forEach(v => {
            if (!res.has(v)) {
                res.add(v)
            } else {
                res.delete(v)
            }
        })
    })
    return Array.from(res.values())
}
console.log(removeDublicate3(arr))
