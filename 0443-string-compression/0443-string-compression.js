/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let i=0,j=0
    while(j<chars.length) {
        let count =0
        let cur = chars[j]
        while(j < chars.length && chars[j] === cur) {
            j++
            count++
        }
        
        chars[i++] = cur
        
        if(count>1) {
            for(const s of count.toString()) {
                chars[i++] = s
            }
        }
    }
    return i
};

