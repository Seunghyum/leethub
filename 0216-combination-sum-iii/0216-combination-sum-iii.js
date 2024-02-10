/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    const NUMS = [1,2,3,4,5,6,7,8,9]
    const answer = []
    
    backtracking(-1,[])
    
    return answer
    function backtracking(pos, arr) {
        // console.log("==== pos : ", pos)
        if(pos+1 > k) return
        if(arr.reduce((a,b) => a+b,0) > n) return
        if(pos+1 === k && arr.reduce((a,b) => a+b,0) === n) return answer.push(arr)
        // console.log('!!!!')
        // console.log("arr : ", arr)
        // console.log("pos === k : ", pos === k)
        // console.log("arr.reduce((a,b) => a+b,0) === n : ", arr.reduce((a,b) => a+b,0) === n)
        // console.log("answer : ", answer)
        for(const num of NUMS) {
            if(arr[arr.length-1] === undefined || arr.reduce((a,b) => a+b,0) <= n && arr[arr.length-1] < num)
                backtracking(pos+1,[...arr, num])
        }
        
    }
};