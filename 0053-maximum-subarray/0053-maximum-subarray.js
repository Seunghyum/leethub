/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let prev = 0, max = -Number.MAX_VALUE
    
    for(let i=0;i<nums.length;i++) {
        prev = Math.max(prev+nums[i], nums[i])
        max = Math.max(prev, max)
    }
    
    return max
};