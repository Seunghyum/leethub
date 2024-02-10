/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(!digits) return []
    const map = new Map(Object.entries ({
        '2':['a','b','c'],
        '3':['d','e','f'],
        '4':['g','h','i'],
        '5':['j','k','l'],
        '6':['m','n','o'],
        '7':['p','q','r','s'],
        '8':['t','u','v'],
        '9':['w','x','y','z'],
    }))
    
    let result = map.get(digits[0])
    for(let i=1;i<digits.length;i++) {
        result = recur(result, map.get(digits[i]))
    }
    
    return result
    
    function recur(target, arr) {
        // console.log('target : ', target)
        // console.log('arr : ', arr)
        const result = []
        for(const t of target) {
            for(const a of arr) {
                result.push(`${t}${a}`)
            }
        }
        return result
    }
};