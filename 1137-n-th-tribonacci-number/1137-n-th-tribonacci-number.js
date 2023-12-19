/**
 * @param {number} n
 * @return {number}
 */

const cache = [0,1,1]

var tribonacci = function(n) {
    if(cache[n] !== undefined) return cache[n]

    cache[n] = tribonacci(n-1)+tribonacci(n-2)+tribonacci(n-3)
    return cache[n]
};