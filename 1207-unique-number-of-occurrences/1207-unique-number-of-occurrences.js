/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const map = {}
    for(const e of arr) {
        if(map[e] === undefined) map[e] = 1
        else map[e]++
    }

    const length = Object.values(map).length
    const setLength = new Set(Object.values(map)).size

    return length === setLength
};