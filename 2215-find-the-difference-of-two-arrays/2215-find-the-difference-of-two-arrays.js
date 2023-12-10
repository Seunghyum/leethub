/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    const answer = [[],[]]
    const set1 = new Set(nums1)
    const set1Arr = [...set1]
    const set2 = new Set(nums2)
    const set2Arr = [...set2]
    const length = set1Arr.length > set2Arr.length ?  set1Arr.length : set2Arr.length
    for(let i=0;i<length;i++) {
        if(set2Arr[i] !== undefined && !set1.has(set2Arr[i])) answer[1].push(set2Arr[i])
        if(set1Arr[i] !== undefined && !set2.has(set1Arr[i])) answer[0].push(set1Arr[i])
    }
    return answer
};

/*
더좋은 답안
var findDifference = function(nums1, nums2) {
        let set1 = new Set(nums1);
        let set2 = new Set(nums2);

        let diff1 = [...set1].filter(x => !set2.has(x));
        let diff2 = [...set2].filter(x => !set1.has(x));

        return [diff1, diff2];
};
*/