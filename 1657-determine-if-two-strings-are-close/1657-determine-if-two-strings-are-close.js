/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
    if(word1.length !== word2.length) return false
    const map1 = {}
    const map2 = {}
    for(let i=0;i<word1.length;i++) {
        if(map1[word1[i]] === undefined) map1[word1[i]] = 1
        else map1[word1[i]]++

        if(map2[word2[i]] === undefined) map2[word2[i]] = 1
        else map2[word2[i]]++
    }

    for(const key in map1) {
        if(map2[key] === undefined) return false
    }
    const values1 = Object.values(map1).sort().join('')
    const values2 = Object.values(map2).sort().join('')
    return values1 === values2
};