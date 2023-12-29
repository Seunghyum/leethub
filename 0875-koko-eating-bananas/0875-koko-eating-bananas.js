/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let min = 1, max = Math.max(...piles), answer=max
    let time = (speed) => piles.reduce((acc, pile) => acc + Math.ceil(pile/speed),0)

    while(min<=max) {
        let mid = Math.floor((min+max)/2)

        if(time(mid) <= h) {
            answer = mid
            max = mid - 1
        } else {
            min = mid+1
        }
    }

    return answer
    
};

/**

- 좋은 답안
https://leetcode.com/problems/koko-eating-bananas/solutions/1703427/javascript-binary-search-explained/?envType=study-plan-v2&envId=leetcode-75
 */