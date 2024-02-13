/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    for(let i=0;i<words.length;i++) {
        if(isPalindromic(words[i])) return words[i]
    }
    return ''
    
    function isPalindromic(str) {
        if(str.length === 1) return true
        let left=0, right=str.length-1
        while(left<=right) {
            if(left === right) return true
            if(str[left] !== str[right]) return false
            left++
            right--
        }
        
        return true
        
    }
};