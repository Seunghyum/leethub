/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const target = [...s]
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', "U"])
    let left = 0, right = s.length-1
    
    while(left<right) {
        if(vowels.has(target[left])) {
            while(left<right) {
                if(vowels.has(target[right])) {
                    const tmp = target[right]
                    target[right] = target[left]
                    target[left] = tmp
                    right--
                    break
                }
                right--
            }
        }
        left++
    }

    return target.join('')
};