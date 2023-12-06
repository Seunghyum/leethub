/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0
    let right = height.length-1
    let maxWater = 0
    while (left < right) {
        const width = right - left
        const h = Math.min(height[left], height[right])
        maxWater = Math.max(width*h, maxWater)
        if(height[left] < height[right]) {
            left++
        } else {
            right--
        }
    }
    return maxWater
    // let answer = 0
    // const reversed = [...height].reverse()
    // const set = new Set(height)
    
    // set.forEach(s => {
    //     const idx = height.findIndex(h => s <= h)
    //     const rIdx = reversed.length - 1 - reversed.findIndex(r => s <= r)
    //     if(idx !== rIdx) {
    //         const m = (rIdx-idx) * s
    //         if(answer < m) answer = m
    //     }
    // })
    
    // return answer
};