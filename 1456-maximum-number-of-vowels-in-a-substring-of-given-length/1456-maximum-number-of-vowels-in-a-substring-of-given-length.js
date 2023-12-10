/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    const vowel = new Set(['a','e','i','o','u'])
    let answer = 0
    
    for(let i=0;i<k;i++) {
        if(vowel.has(s[i])) answer++
    }

    let idx = 0
    let count = answer
    while(idx<s.length-k) {
        if(vowel.has(s[idx])) count--
        if(vowel.has(s[k+idx])) count++ 
        if(count === k) return k
        answer = Math.max(answer, count > k ? k : count)
        idx++
    }
    return answer
};