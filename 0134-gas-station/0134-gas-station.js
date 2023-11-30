/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
 var canCompleteCircuit = function(gas, cost) {
    let totalTank = 0;
    let currentTank = 0;
    let startingStation = 0;
    for (let i = 0; i < gas.length; i++) {
        const netCost = gas[i] - cost[i];
        totalTank += netCost;
        currentTank += netCost;
        if (currentTank < 0) {
            startingStation = i+1;
            currentTank = 0;
        }
    }
    return totalTank < 0 ? -1 : startingStation;
};

// var canCompleteCircuit = function(gas, cost) {
//     const sums = gas.map((g,i) => g-cost[i])
//     const startings = sums.map((s, i) => (s >= 0 ? i : undefined)).filter(e => typeof e === 'number')

//     outer:
//         for(const starting of startings) {
//             let curGas = 0
//             for(let i = 0;i<gas.length; i++) {
//                 const cur = (starting + i) % gas.length
//                 curGas += sums[cur]
//                 if(curGas < 0) {
//                     continue outer;    
//                 }
//             }
//             return starting
//         }
//     return -1
// };