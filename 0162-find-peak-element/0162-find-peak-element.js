/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    if(nums.length === 1) return 0

    return recursion(nums, 0, nums.length-1)

    function recursion(nums, start, end) {
        let mid = Math.floor((start+end)/2)

        const prev = mid > 0 ? nums[mid-1] : -Math.pow(2,31)
        const next = mid < nums.length-1 ? nums[mid+1] : -Math.pow(2,31) - 1

        if(nums[mid] > prev && nums[mid] > next) return mid

        if(nums[mid] < prev) {
            return recursion(nums, start, mid-1)
        } else {
            return recursion(nums, mid+1, end)
        }
    }
};