/**
 * @param {number} m
 * @param {number} n
 * @return {number}

3x3 = down, down, right, right = 4C2 = 6
d, r, d, r
d,r,r,d
d,d,r,r
r,d,r,d
r,d,d,r
r,r,d,d

4*4 = d,d,d,r,r,r = 6c3 = 6*5*4 / 3*2 = 20

3*7 = d,d,r,r,r,r,r,r = 8c2 = 8*7/2 = 28 


 */
var uniquePaths = function(m, n) {
    if(m === 1 || n === 1) return 1

    let min = m > n ? n : m

    const M = new Array(m-1+n-1).fill(0).map((_,i) => m-1+n-1-i).filter((_,i) => i<min-1).reduce((acc, e) => acc*e,1)
    const N = new Array(min-1).fill(0).map((_,i) => min-1-i).reduce((acc, e) => acc*e,1)
    
    const answer = M/N
    const limit = 2*(10**9)
    return limit < answer ? limit : answer
};

/** 
- 더 좋은 답안

var uniquePaths = function(m, n) {
    let ans = 1;
    for (let i = 1; i <= m - 1; i++) {
        ans = ans * (n - 1 + i) / i;
    }
    return ans;
};


 */