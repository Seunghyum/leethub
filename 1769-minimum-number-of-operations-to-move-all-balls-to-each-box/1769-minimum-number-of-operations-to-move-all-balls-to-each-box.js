/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function(boxes) {
    const boxsArr = boxes.split('')
    const answer = []
    for(let i=0;i<boxsArr.length;i++) {
        answer[i] = boxsArr.reduce((a,b,j) => (b === '1' ? a + Math.abs(j - i) : a), 0)
    }
    return answer
};