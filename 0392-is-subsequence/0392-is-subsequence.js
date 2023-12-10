/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if(s.length > t.length) return false
    if(s.length === t.length) return s === t
    
    let sIndex = 0
    for(let i=0;i<t.length;i++) {
        if(t[i] === s[sIndex]) sIndex++
    }

    return sIndex === s.length
};