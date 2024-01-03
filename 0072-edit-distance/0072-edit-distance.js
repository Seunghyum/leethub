/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    const m = word1.length
    const n = word2.length
    const dp = Array(m+1).fill(0).map(() => Array(n+1).fill(0))

    for(let i=1;i<=m;i++) {
        dp[i][0] = i
    }
    for(let j=1;j<=n;j++) {
        dp[0][j] = j
    }

    for(let i=1;i<=m;i++) {
        for(let j=1;j<=n;j++) {
            if(word1[i-1] === word2[j-1]) {
                dp[i][j] = dp[i-1][j-1]
            } else {
                dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) + 1
            }
        }
    }

    return dp[m][n]
};

/**

- 레벤슈타인 알고리즘

    https://jino-dev-diary.tistory.com/entry/Algorithm-%EB%AC%B8%EC%9E%A5%EC%9D%98-%EC%9C%A0%EC%82%AC%EB%8F%84-%EB%B6%84%EC%84%9D-%ED%8E%B8%EC%A7%91-%EA%B1%B0%EB%A6%AC-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-Levenshtein-Distance

- 2차원 배열
- 수정 / 삭제 / 수정

 */