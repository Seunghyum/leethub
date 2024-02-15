/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
    nums.sort((a,b) => a-b)
    
    let sum = nums.reduce((a,b) => a+b,0)
    
    for(let i=nums.length-1;i>=0;i--) {
        sum -= nums[i]
        if(sum > nums[i]) return sum + nums[i]
    }
    
    return -1
    
//     nums.sort((a,b) => a-b)
    
//     let sum=0, max=-1
//     for(let i=0;i<nums.length;i++) {
//         if(i>=2 && sum>nums[i]) {
//             max = sum + nums[i]
//         }
//         sum += nums[i]
//     }
    
//     return max
};