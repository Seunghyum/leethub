/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    return plus(digits, digits.length-1)
    function plus(digits, lastIdx) {
        if(lastIdx < 0) {
            return [1].concat(digits)
        }
        digits[lastIdx] += 1
        if(digits[lastIdx] === 10) {
            digits[lastIdx] = 0
            return plus(digits, lastIdx-1)
        } 
        return digits
    }
};
    