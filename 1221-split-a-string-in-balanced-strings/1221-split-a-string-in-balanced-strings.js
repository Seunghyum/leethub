/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    const map = {'R': 0, "L":0}
    let answer = 0
    for(let i=0;i<s.length;i++) {
        map[s[i]] += 1
        if(map.R !== 0 && map.L !== 0  && map.R === map.L) {
            answer++
        }
    }
    if(map.R !== map.L) answer++
    return answer
};


/**
 더 좋은답안
var balancedStringSplit = function(s) {
    let count = 0
    let answer = 0
    for(let i=0;i<s.length;i++) {
        s[i] === "R" ? count++ : count--
        if(count === 0) {
            answer++
        }
    }
    return answer
}
*/