/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let mid = Math.floor(nums.length/2)
    let left=0,right=nums.length-1
    if(nums[left] >= target) return 0
    if(nums[right] < target) return right+1
    if(nums[right] === target) return right
    while(left<=right) {
        if(nums[mid] >= target && nums[mid-1] < target) return mid
        mid = Math.floor((left+right)/2)
        if(nums[mid] > target) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    return mid
};

/**
- 내 답안

var searchInsert = function(nums, target) {
    let mid = Math.floor(nums.length/2)
    let left=0,right=nums.length-1
    if(nums[left] >= target) return 0
    if(nums[right] < target) return right+1
    if(nums[right] === target) return right
    while(left<=right) {
        if(nums[mid] >= target && nums[mid-1] < target) return mid
        mid = Math.floor((left+right)/2)
        if(nums[mid] > target) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    return mid
};

- 더 좋은 답안

var searchInsert = function(nums, target) {
    let mid
    let left=0,right=nums.length-1
    while(left<=right) {
        mid = Math.floor((left+right)/2)
        if(nums[mid] === target) {
            return mid
        } else if(nums[mid] > target) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    return left
};

 */