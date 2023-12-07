/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    let answer = [];

    for(let i = 0; i < nums.length - 2; i++) {
        if(i > 0 && nums[i] === nums[i - 1]) continue; // Skip the same result
        let left = i + 1, right = nums.length - 1;

        while(left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if(sum < 0) {
                left++;
            } else if(sum > 0) {
                right--;
            } else {
                answer.push([nums[i], nums[left], nums[right]]);
                while(left < right && nums[left] === nums[left + 1]) left++; // Skip the same result
                while(left < right && nums[right] === nums[right - 1]) right--; // Skip the same result
                left++;
                right--;
            }
        }
    }
    return answer;
};

// // 첫 답안 - 타임아웃
// var threeSum = function(nums) {
//     nums.sort((a,b) => a-b)

//     let answer = []
    
//     for(let left=0;left<nums.length-1;left++) {
//         for(let right=nums.length-1;right>0;right--) {
//             if(left >= right) break

//             sum = nums[left] + nums[right] 
//             const idx = nums.findIndex((n,j) => {
//                 const isLeft = j > left
//                 const isRight = j < right
//                 return isLeft && isRight && (n + sum === 0)
//             })
//             if(idx > -1) {

//               answer.push([nums[left], nums[idx], nums[right]])
//               while(nums[right] === nums[right-1]) {
//                 right--
//               }
//               while(nums[left] === nums[left+1]) {
//                 left++
//               }
//             }
//         }

//     }
//     return answer
// };

/*
- GPT 코드리뷰

이 코드는 주어진 배열에서 세 수의 합이 0이 되는 모든 고유한 쌍을 찾는 함수입니다.

코드는 다음과 같이 작동합니다:

1. 배열을 오름차순으로 정렬합니다.
2. answer 배열을 초기화하여 결과를 저장합니다.
3. 배열의 각 요소에 대해 다음을 수행합니다:
- left 포인터를 현재 요소로 설정하고, right 포인터를 배열의 마지막 요소로 설정합니다.
- left가 right보다 크거나 같으면 반복을 중단합니다.
- nums[left]와 nums[right]의 합을 계산합니다.
- 배열에서 left보다 크고 right보다 작은 인덱스의 요소 중, 합과 현재 요소의 합이 0이 되는 요소의 인덱스를 찾습니다.
- 이러한 요소가 있으면, nums[left], nums[idx], nums[right]를 answer에 추가합니다. 그리고 nums[right]와 nums[right-1]이 같은 동안 right를 감소시키고, nums[left]와 nums[left+1]이 같은 동안 left를 증가시킵니다.
4. 모든 요소를 검사한 후, answer를 반환합니다.

이 코드는 잘 작성되었으며, 문제를 해결하는 데 필요한 모든 요소를 포함하고 있습니다. 그러나 이 코드는 시간 복잡도가 O(n^2)인 findIndex 메서드를 사용하고 있습니다. 이를 개선하기 위해, 투 포인터 기법을 사용하여 left와 right를 이동시키면서 세 수의 합이 0이 되는 쌍을 찾을 수 있습니다. 이렇게 하면 시간 복잡도를 O(n^2)로 줄일 수 있습니다. 또한, 이 코드는 중복된 쌍을 제거하기 위해 while 루프를 사용하고 있습니다. 이 부분도 투 포인터 기법을 사용하여 개선할 수 있습니다.


- 피드백 적용 답안

네, 투 포인터 기법을 사용하여 코드를 개선해보겠습니다. 아래는 개선된 코드입니다:
var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    let answer = [];

    for(let i = 0; i < nums.length - 2; i++) {
        if(i > 0 && nums[i] === nums[i - 1]) continue; // Skip the same result
        let left = i + 1, right = nums.length - 1;

        while(left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if(sum < 0) {
                left++;
            } else if(sum > 0) {
                right--;
            } else {
                answer.push([nums[i], nums[left], nums[right]]);
                while(left < right && nums[left] === nums[left + 1]) left++; // Skip the same result
                while(left < right && nums[right] === nums[right - 1]) right--; // Skip the same result
                left++;
                right--;
            }
        }
    }
    return answer;
};

이 코드는 i를 고정하고 left와 right를 이동시키면서 세 수의 합이 0이 되는 쌍을 찾습니다.
세 수의 합이 0보다 작으면 left를 증가시키고, 0보다 크면 right를 감소시킵니다.
세 수의 합이 0이면, 해당 쌍을 answer에 추가하고 left와 right를 모두 이동시킵니다.
또한, 중복된 쌍을 제거하기 위해 while 루프를 사용하여 같은 결과를 건너뜁니다. 
이렇게 하면 시간 복잡도는 O(n^2)이고, 공간 복잡도는 O(1)입니다.


- 이 코드가 더 좋은 코드야?
```
var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
        let answer = [];
        
        if (nums.length < 3) {
            return answer;
        }
        
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] > 0) {
                break;
            }
            
            if (i > 0 && nums[i] === nums[i - 1]) {
                continue;
            }
            
            let low = i + 1;
            let high = nums.length - 1;
            while (low < high) {
                const sum = nums[i] + nums[low] + nums[high];
                if (sum > 0) {
                    high--;
                } else if (sum < 0) {
                    low++;
                } else {
                    answer.push([nums[i], nums[low], nums[high]]);
                    let lastLowOccurrence = nums[low];
                    let lastHighOccurrence = nums[high];
                    
                    while (low < high && nums[low] === lastLowOccurrence) {
                        low++;
                    }
                    
                    while (low < high && nums[high] === lastHighOccurrence) {
                        high--;
                    }
                }
            }
        }
        return answer;
};
```
이 코드는 이전에 제시한 코드와 매우 유사하며, 세 수의 합이 0이 되는 모든 고유한 쌍을 찾는 문제를 해결합니다. 이 코드는 추가적으로 몇 가지 최적화를 수행하고 있습니다:

1. 입력 배열의 길이가 3 미만인 경우, 빈 배열을 반환합니다. 이는 세 수의 합을 계산할 수 없는 경우를 처리합니다.
2. 현재 요소가 0보다 큰 경우, 반복을 중단합니다. 이는 정렬된 배열에서 세 수의 합이 0이 되는 쌍을 더 이상 찾을 수 없는 경우를 처리합니다.

이러한 최적화는 코드의 효율성을 높이며, 불필요한 계산을 줄입니다. 따라서 이 코드는 "더 좋은" 코드라고 할 수 있습니다. 이 코드의 시간 복잡도는 O(n^2)이고, 공간 복잡도는 O(1)입니다. 이는 코드가 문자열을 한 번만 훑고, 추가적인 공간을 사용하지 않기 때문입니다.

*/