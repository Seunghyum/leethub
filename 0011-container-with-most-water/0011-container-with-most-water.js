/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let answer = 0
    const reversed = [...height].reverse()
    const set = new Set(height)
    
    set.forEach(s => {
        const idx = height.findIndex(h => s <= h)
        const rIdx = reversed.length - 1 - reversed.findIndex(r => s <= r)
        if(idx !== rIdx) {
            const m = (rIdx-idx) * s
            if(answer < m) answer = m
        }
    })
    
    return answer
};