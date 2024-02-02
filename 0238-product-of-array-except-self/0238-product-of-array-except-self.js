/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const answer = []
    let left=1,right=1
    
    for(let i=0;i<=nums.length-1;i++) {
        answer[i] = left
        left *= nums[i]
    }
    for(let i=nums.length-1;i>=0;i--) {
        answer[i] *= right
        right *= nums[i]
    }
    return answer
};