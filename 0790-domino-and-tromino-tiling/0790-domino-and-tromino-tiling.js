/**
 * @param {number} n
 * @return {number}
 */
var numTilings = function(n) {
    if(n<=1) return 1 
    else if(n===2) return (1+1)  // 2
    else if(n===3) return (1+2)+1*2 // 5

    const cache = new Map([[1,1],[2,2],[3,5]])

    const mod = 10**9+7
    const count = (n) => {
        if(!cache.has(n)) {
            cache.set(n, 2*count(n-1) + count(n-3))
        }
        return cache.get(n) % mod
    }
    return count(n)
};

/**

    1. 공식화 하고 w(n) = w(n-1) + w(n-2)....w(0)
    2. 그것에 메모제이션을 적용하는 방식
 */