/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    let zeroCount=0, left=0,right=0,answer=0

    while(right<nums.length){
        if(!nums[right]) {
            zeroCount++
        }

        while(zeroCount>1) {
            if(!nums[left]) zeroCount--
            left++
        }

        answer = Math.max(answer, right-left)
        right++
    }

    return answer
};