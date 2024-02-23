/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// var search = function(nums, target, start=0,end=nums.length-1) {
//     const mid = Math.floor((end+start)/2)
//     if(nums[mid] === target) return mid
//     if(end <= start) return -1

//     if(nums[mid] > target) return search(nums, target, start,mid-1)
//     else if(nums[mid] < target) return search(nums, target, mid+1,end)
// };

const search = (nums, target) => {
    let lo=0, hi=nums.length-1
    
    while(lo<hi) {
        const mid = lo + Math.floor((hi-lo+1)/2)
        
        if(target < nums[mid]) {
            hi=mid-1
        } else {
            lo = mid
        }
    }
    
    return target === nums[lo] ? lo : -1
}