/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let max = candies.reduce((a,b) => a > b ? a : b, 0)
    return candies.map(c => c + extraCandies >= max ? true : false)
};