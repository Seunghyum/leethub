/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {

    for(let i=0;i<9;i++) {
        const row = board[i].filter(b => b !== '.')
        if(row.length !== new Set(row).size) {
            return false
        }
        const col = []
        for(let j=0;j<9;j++) {
            if(board[j][i] !== '.') col.push(board[j][i])
        }
        if(col.length !== new Set(col).size) {
            return false
        }

        // sub-board
        const startR = Math.floor(i/3)*3, startC = i%3*3
        const sub = []
        for(let i=0;i<3;i++) {
            for(let j=0;j<3;j++) {
                if(board[startR+i][startC+j] !== '.') sub.push(board[startR+i][startC+j])
            }
        }
        if(sub.length !== new Set(sub).size) {
            return false
        }
    }

    return true
};