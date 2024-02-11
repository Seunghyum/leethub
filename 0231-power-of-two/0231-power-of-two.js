/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    // if(n===1) return true
    // else if(Math.abs(n)%2 !== 0) return false
    // else {
    //     return isPowerOfTwo(n/2)
    // }
    
    if(n < 1) return false
    let i=0
    // console.log("num : ", num)
    while(n >= Math.pow(2,i)) {
        // console.log('Math.pow(2,i) : ', Math.pow(2,i) )
        if(Math.pow(2,i) === n) return true
        i++
    }
    return false
    
};