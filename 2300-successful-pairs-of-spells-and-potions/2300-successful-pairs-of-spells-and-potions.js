/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function(spells, potions, success) {
    const answer = []
    potions.sort((a,b) => a-b)
    for(let i=0;i<spells.length;i++) {
        const target = success/spells[i]
        const count = BSearch(potions, target)

        answer.push(count)
    }
    return answer
};

const BSearch = (arr, target) => {
    if(arr[arr.length-1] < target) {
        return 0
    }
    if(arr[0] >= target) {
        return arr.length
    }
    let left=0, right=arr.length-1

    while (left<=right) {
        const mid = Math.floor((left+right)/2)

        if(arr[mid] < target) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }

    return arr.length - left
}

/**

- 첫 답안

var successfulPairs = function(spells, potions, success) {
    const answer = []
    potions.sort((a,b) => a-b)
    for(let i=0;i<spells.length;i++) {
        if(potions[potions.length-1] * spells[i] < success) {
            answer.push(0)
            continue
        }
        if(potions[0] * spells[i] >= success) {
            answer.push(potions.length)
            continue
        }
        for(let j=0;j<potions.length;j++) {
            const res = spells[i] * potions[j]

            if(res >= success) {
                answer.push(potions.length - j)
                break
            }
        }
    }
    return answer
};

- binary search

*/