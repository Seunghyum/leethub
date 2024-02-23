/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    return binarySearch(0, nums.length-1)
    function binarySearch(start, end) {
        const mid = Math.floor((end+start)/2)
        if(nums[mid] === target) return mid
        if(end <= start) return -1
        
        if(nums[mid] > target) return binarySearch(start,mid-1)
        else if(nums[mid] < target) return binarySearch(mid+1,end)
    }
};