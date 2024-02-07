/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const map = {}
    for(const str of s) {
        if(map[str]) map[str] += 1
        else map[str]= 1
    }
    
    for(const str of t) {
        if(map[str]) {
            map[str] -= 1
            if(map[str] < 0) return false
        } else return false
    }
    
    return Object.values(map).every(count => count === 0)
};