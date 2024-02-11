/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    // let i=0
    // while(n >= Math.pow(2,i)) {
    //     if(Math.pow(2,i) === n) return true
    //     i++
    // }
    // return false
    
    return n < 1 ? false : !(n &(n-1))
    
};