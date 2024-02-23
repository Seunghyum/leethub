/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
const findCheapestPrice = (n, flights, src, dst, k) => {
    const graph = {}
    
    for(const[x,y,price] of flights) {
        if(!graph[x]) graph[x] = []
        
        graph[x].push([y,price])
    }
    
    const dp = Array(n).fill(Infinity)
    dp[src]=0
    
    const pq = [[src,0,k+1]]
    
    while(pq.length) {
        const [x,total,stops] = pq.shift()
        
        if(x === dst) continue
        if(stops === 0) continue
        if(!graph[x]) continue
        
        for(const [y,price] of graph[x]) {
            if(price+total > dp[y]) continue
            dp[y] = price+total
            pq.push([y,price+total,stops-1])
        }
    }
    return dp[dst] !== Infinity ? dp[dst] : -1
    
}


// const findCheapestPrice = (n, flights, src, dst, k) => {
//   const graph = {};

//   for (const [x, y, price] of flights) {
//     if (!graph[x]) graph[x] = [];
//     graph[x].push([y, price]);
//   }

//   const dp = Array.from({ length: n }, () => Infinity);
//   dp[src] = 0;

//   const pq = [[src, 0, k + 1]]; // x, cost, stops

//   while (pq.length) {
//     const [x, total, stops] = pq.shift();

//     if (x === dst) continue; // continue to find cheapest path
//     if (stops === 0) continue; // exausted number of steps
//     if (!graph[x]) continue;

//     for (const [y, price] of graph[x]) {
// 	// update destination cost if cheaper
//       if (dp[y] > total + price) {
//         dp[y] = total + price;
//         pq.push([y, total + price, stops - 1]);
//       }
//     }
//   }

//   return dp[dst] !== Infinity ? dp[dst] : -1;
// };

/**
var findCheapestPrice = function(n, flights, src, dst, k) {
    let answer = -1
    
    move(src)
    return answer
    function move(from=src, curK=0, cost=0){
        if(answer !== -1 && cost > answer ) return
        if(curK > k+1) return
        if(dst === from && curK <= k+1) {
            if(answer === -1 || answer > cost) return answer = cost
        }
        if(flights.length === 0) return
        
        const ableSrc = flights.filter(f => f[0] === from)
        
        // console.log('ableSrc : ', ableSrc)
        for(const asrc of ableSrc) {
            move(asrc[1], curK+1, cost + asrc[2])
        }
    }
};

 */