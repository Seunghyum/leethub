/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function(mat) {
    let answer =0
    const cols = []
    for(let i=0;i<mat.length;i++) {
        const j = checkRow(mat, i)
        if(j > - 1) {
            if(checkCol(mat, j) > -1) answer++
        }
    }
    return answer
};

function checkRow(mat, i) {
    let idx = -1
    for(let j=0;j<mat[0].length;j++) {
        if(mat[i][j] === 1) {
            if(idx > -1) return -1
            else idx = j
        }
    }

    return idx
}
function checkCol(mat, j) {
    let count = 0
    for(let i=0;i<mat.length;i++) {
        if(mat[i][j] === 1) count++
    }
    return count === 1 ? j : -1
}