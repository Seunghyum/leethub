/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    if(n === 0) return arr

    return recursive(arr, [], n, 0)

    function recursive(origin, after, n, depth) {
        if(n === 0) return arr
        for(let i=0;i<origin.length;i++) {
            if(Array.isArray(origin[i]) && depth+1 <= n) {
                recursive(origin[i], after, n, depth+1)
            } else {
                after.push(origin[i])
            }
        }
        return after
    }
};