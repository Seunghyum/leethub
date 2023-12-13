/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    const catchArr = nums.reduce((a,b) => {
        a.push(a[a.length-1]+ b)
        return a
    },[0])

    for(let i=0;i<catchArr.length-1;i++) {
        if(catchArr[i] === catchArr[catchArr.length-1] - catchArr[i+1]) return i
    }
    return -1
};