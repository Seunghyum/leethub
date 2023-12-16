/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    if(n === 1) return 1
    let flag
    let mid = Math.round(n/2)
    let gap = mid
    while(flag !== 0) {
        flag = guess(Math.round(mid))
        gap = gap / 2
        if(flag === 1) {
            mid = mid + gap
        } else if(flag === -1) {
            mid = mid - gap
        }
    }
    return Math.round(mid)
};