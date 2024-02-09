/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    if(nums.length < 3) return false
    let first = Number.MAX_SAFE_INTEGER
    let second = Number.MAX_SAFE_INTEGER
    for(const n of nums) {
        if(first >= n) {
            first = n
        } else if (second >= n) {
            second = n
        } else {
            return true
        }
    }
    return false
    
};

