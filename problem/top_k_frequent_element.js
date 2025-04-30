function topKFrequent(nums, k) {
    const freq = new Array(10).fill(0)
    for (const element of nums) {
        freq[element] = freq[element] + 1
    }
    const res = []
    let max = freq[0]
    let idx = 0
    while (k !== 0) {
        for (let i = 1; i < freq.length; i++) {
            const el = freq[i]
            if (max < el) {
                max = el
                idx = i
            }
        }
        res.push(idx)
        freq[idx] = 0
        max = freq[0]
        k--
    }
    return res
}
console.log(topKFrequent([2, 1, 1, 1, 2, 2, 3, 4, 4], 3))