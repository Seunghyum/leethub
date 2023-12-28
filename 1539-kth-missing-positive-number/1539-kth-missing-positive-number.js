/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */

var findKthPositive = function(arr, k) {
    let left=0, right = arr.length-1
    let mid = 0
    while(left<=right) {
        mid = Math.floor((right+left)/2)
        const gap = arr[mid] - (mid+1)
        if(gap < k) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }

    return left+k
};

/**

- 내가 푼 답

var findKthPositive = function(arr, k, ) {
    const answer = []
    let gap = 0
    // if(gap > 0) arr.push()

    recur(arr,k,0,arr.length-1)
    if(answer[k-1] === undefined) {
        console.log('!!!! answer = ', answer)   
    }
    return answer[k-1]

    function recur(arr, k, start, end) {
        console.log('=======')
        console.log('start : ', start)
        console.log('end : ', end)
        
        if(start !== end) {
            const mid = start + Math.floor((end-start)/2)
            console.log('mid : ', mid)
            if(start < mid) recur(arr,k,start, mid)
            if(mid+1 < end-1) recur(arr,k,mid+1, end)

            if(typeof answer[k-1] === 'number') return

            for(let i=start;i<end;i++) {

                console.log("!!!!")
                console.log('i : ', i)

                console.log('arr[i] : ', arr[i])

                console.log('before gap : ', gap)
                console.log('i + 1 : ', i + 1)
                console.log('arr[i] + gap : ', arr[i] + gap)
                console.log('i + 1 !== arr[i] + gap : ', i + 1 !== arr[i] + gap)
                if(i + 1 !== arr[i] + gap) {

                    gap += (arr[i] - (i+1))
                    console.log('after gap : ', gap)
                    // if(reverse) answer.
                    // else 
                    answer.push(i + 1)
                    console.log('answer : ', answer)
                }
            }
            console.log('gap : ', gap)
        }
    }
};

- 좋은 답안

놓친 스킬
- (left + right) / 2

var findKthPositive = function(arr, k) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const missingCount = arr[mid] - mid - 1;

        if (missingCount < k) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    // At the end of the loop, 'left' will point to the index where the kth missing positive integer should be inserted.
    // The value at 'left' will be the kth missing positive integer.
    // Calculate the missing count before 'left' element to get the actual kth missing positive integer.
    return left + k;
};

 */