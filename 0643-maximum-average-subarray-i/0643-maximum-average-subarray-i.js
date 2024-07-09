/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let count = k
    let answer = nums.slice(0,k).reduce((a,b) => a+b)
    let sum = answer
    for(let i=0;i<nums.length-k;i++) {
        sum += nums[k+i] - nums[i]
        if(sum > answer) answer = sum
    }
    return answer/k
};