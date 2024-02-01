/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
    let stars = 0 
    let output = ''
    for(let i=s.length-1;i>=0;i--) {
        if(s[i] === '*') {
            stars++
            continue
        }
        if(stars>0) {
            stars--
            continue
        }
        output = s[i] + output
    }
    
    return output
};