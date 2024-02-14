/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n, target = '1') {
    if(n === 1) return target
    
    let cur = '', count = 0, res = ''
    for(let i=0;i<target.length;i++) {
        if(cur !== target[i]) {
            if(count > 0) res += `${count}${cur}`
            cur = target[i]
            count = 1
        } else {
            count++
        }
    }
    res += `${count}${cur}`
    
    return countAndSay(n-1, res)
};