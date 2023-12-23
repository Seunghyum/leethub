/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let robbedIdxPlus1 = 0;
    let robbedIdxPlus2 = 0;
    
    for (let i = nums.length - 1; i >= 0; i--) {
        const sumIfSkipped = robbedIdxPlus1;
        const sumIfRobbed = nums[i] + robbedIdxPlus2;
        
        const maxRobbedAtIdx = Math.max(sumIfSkipped, sumIfRobbed);
        
        robbedIdxPlus2 = robbedIdxPlus1;
        robbedIdxPlus1 = maxRobbedAtIdx;
    }
    
    return robbedIdxPlus1;
}

/**

- 내가 푼 방식
DP 경우의 수로 품
답안은 공식화 하여 해결.

function(nums) {
    if(nums.length === 1) return nums[0]
    const path1 = [...nums, 0,0,0]
    const path2 = [...nums, 0,0]

    return Math.max(getPath(path1), getPath(path2))

    function getPath(nums) {
        
        let start = nums.length -1
        let answer=0
        // console.log('nums : ', nums)
        while(start > 0) {
            const twoStep = nums[start-2] ?? 0
            const threeStep = nums[start-3] ?? 0
            const fourStep = nums[start-4] ?? 0
            console.log('-====')
            console.log('twoStep : ', twoStep)
            console.log('threeStep : ', threeStep)
            console.log('fourStep : ', fourStep)
            // if(twoStep === undefined) {
            //     break
            // } else if(threeStep === undefined) {
            //     answer += twoStep
            //     break
            // } 
            // else if(fourStep === undefined) {
            //     answer += twoStep > threeStep ? twoStep : threeStep
            //     break
            // } 
            if(fourStep + twoStep > threeStep) {
                start -= 4
                answer += (fourStep + twoStep)
            } 
            else if(twoStep < threeStep) {
                start -= 3
                answer += threeStep
            } else {
                start -= 2
                answer += twoStep
            }
        }
        return answer
    }
};


- 답안

// O(2^n) time | O(2^n) space
var rob = function(nums, idx = 0) {
    if (idx >= nums.length) {
        return 0;
    }
    
    const sumIfSkipped = rob(nums, idx + 1);
    const sumIfRobbed = nums[idx] + rob(nums, idx + 2);
    
    return Math.max(sumIfSkipped, sumIfRobbed);
};

var rob 

// O(n) time | O(n) space
var rob = function(nums, idx = 0, memo = {}) {
    if (idx in memo) {
        return memo[idx];
    }
    
    if (idx >= nums.length) {
        return 0;
    }
    
    const sumIfSkipped = rob(nums, idx + 1, memo);
    const sumIfRobbed = nums[idx] + rob(nums, idx + 2, memo);
    
    return memo[idx] = Math.max(sumIfSkipped, sumIfRobbed);
};

// O(n) time | O(n) space
var rob = function(nums) {
    const table = new Array(nums.length + 2);
    
    table[nums.length + 0] = 0;
    table[nums.length + 1] = 0;
    
    for (let i = nums.length - 1; i >= 0; i--) {
        const sumIfSkipped = table[i + 1];
        const sumIfRobbed = nums[i] + table[i + 2];
        
        table[i] = Math.max(sumIfSkipped, sumIfRobbed);
    }
    
    return table[0];
}


// O(n) time | O(1) space
var rob = function(nums) {
    let robbedIdxPlus1 = 0;
    let robbedIdxPlus2 = 0;
    
    for (let i = nums.length - 1; i >= 0; i--) {
        const sumIfSkipped = robbedIdxPlus1;
        const sumIfRobbed = nums[i] + robbedIdxPlus2;
        
        const maxRobbedAtIdx = Math.max(sumIfSkipped, sumIfRobbed);
        
        robbedIdxPlus2 = robbedIdxPlus1;
        robbedIdxPlus1 = maxRobbedAtIdx;
    }
    
    return robbedIdxPlus1;
}
 */