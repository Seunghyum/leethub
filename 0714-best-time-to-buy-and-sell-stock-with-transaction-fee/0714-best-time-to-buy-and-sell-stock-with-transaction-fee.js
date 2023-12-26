/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
    const n = prices.length;
    const memo = [...new Array(n)].map(() => new Array(2).fill(-1));

    function dp(i, j) {
        if (i === n) return 0;

        if (memo[i][j] !== -1) return memo[i][j];

        if (j === 0) {
            return memo[i][j] = Math.max(-prices[i] + dp(i + 1, 1), dp(i + 1, 0));
        } else {
            return memo[i][j] = Math.max(prices[i] - fee + dp(i + 1, 0), dp(i + 1, 1));
        }
    }
    return dp(0, 0);
};

/**

- 내 답안 TC: (nLogN)
var maxProfit = function(prices, fee) {

    prices.push(0)

    return carculate(prices, fee, 0, memo)
    
    function carculate (prices, fee, index=0, memo=[], isBuy=true, profit=0) {
        if(prices.length <= index+1) return profit
        
        const curProfit = isBuy
                            ? profit - prices[index]
                            : profit + prices[index] - fee
        const skip = carculate(prices, fee, index+1, memo, isBuy, profit)
        const buyOrSell = carculate(prices, fee, index+1, memo, !isBuy, curProfit)

        memo[index] = Math.max(skip, buyOrSell)
        return memo[index]
    }
};

- 더 좋은 답안
https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/solutions/3667617/js-recursion-memoization-tabulation-space-optimization/?envType=study-plan-v2&envId=leetcode-75

// Recursion [TLE]
var maxProfit = function(prices, fee) {
    const n = prices.length;

    function dp(i, j) {
        if (i === n) return 0;

        if (j === 0) {
            return Math.max(-prices[i] + dp(i + 1, 1), dp(i + 1, 0));
        } else {
            return Math.max(prices[i] - fee + dp(i + 1, 0), dp(i + 1, 1));
        }
    }
    return dp(0, 0);
};
// TC: Exponential
// SC: O(n)

 // Recursion + Memoization
var maxProfit = function(prices, fee) {
    const n = prices.length;
    const memo = [...new Array(n)].map(() => new Array(2).fill(-1));

    function dp(i, j) {
        if (i === n) return 0;

        if (memo[i][j] !== -1) return memo[i][j];

        if (j === 0) {
            return memo[i][j] = Math.max(-prices[i] + dp(i + 1, 1), dp(i + 1, 0));
        } else {
            return memo[i][j] = Math.max(prices[i] - fee + dp(i + 1, 0), dp(i + 1, 1));
        }
    }
    return dp(0, 0);
};
// TC: O(n)
// SC: O(n)

// Tabulation
var maxProfit = function(prices, fee) {
    const n = prices.length;
    const dp = [...new Array(n + 1)].map(() => new Array(2).fill(0));

    for (let i = n - 1; i >= 0; i--) {
        dp[i][0] = Math.max(-prices[i] + dp[i + 1][1], dp[i + 1][0]);
        dp[i][1] = Math.max(prices[i] + dp[i + 1][0] - fee, dp[i + 1][1]);
    }
    return dp[0][0];
};
// TC: O(n)
// SC: O(n)

// Tabulation - Space optimized
var maxProfit = function(prices, fee) {
    const n = prices.length;
    let dp = new Array(2).fill(0);

    for (let i = n - 1; i >= 0; i--) {
        let temp = new Array(2).fill(0);
        temp[0] = Math.max(-prices[i] + dp[1], dp[0]);
        temp[1] = Math.max(prices[i] + dp[0] - fee, dp[1]);
        dp = temp;
    }
    return dp[0];
};
// TC: O(n)
// SC: O(1)

 */