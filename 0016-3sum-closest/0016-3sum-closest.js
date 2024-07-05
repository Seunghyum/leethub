/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {

    
    nums.sort((a, b) => a - b);
    let closestSum = nums[0] + nums[1] + nums[2];  // 초기값을 첫 세 숫자의 합으로 설정

    for(let i=0;i<nums.length-2;i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue; 
        let left=i+1, right=nums.length-1

        while(left<right) {
            const currentSum = nums[i] + nums[left] + nums[right] 

            if(Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
                closestSum = currentSum
            }

            if(currentSum === target) return currentSum
            else if(currentSum < target) { // 중복된 값 건너뛰기
                left++
                while (left < right && nums[left] === nums[left - 1]) {
                    left++;
                }
            } else {
                right--
                // 중복된 값 건너뛰기
                while (left < right && nums[right] === nums[right + 1]) {
                    right--;
                }
            }
        }
    }
    return closestSum
};