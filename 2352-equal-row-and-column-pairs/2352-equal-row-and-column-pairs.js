/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
    let answer = 0
    const row = grid.map(e => e.join('-'))

    for(let i=0;i<grid.length;i++) {
        let arr = []
        for(let j=0;j<grid.length;j++) {
            arr.push(grid[j][i])
        }
        const str = arr.join('-')
        const count = row.filter(e => e === str).length
        if(count) answer+=count
    } 
    return answer
};

/**
- 더 좋은 답안

var equalPairs = function(grid) {
    const rows = grid.map(arr => arr.join())
    const columns = grid[0].map((col, i) => grid.map(row => row[i]).join())
    let count = 0
    for (let row of rows) {
        for (let column of columns) {
            if (row === column) count++
        }
    }
    return count
};


 */