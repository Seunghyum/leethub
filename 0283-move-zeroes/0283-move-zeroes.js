/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var moveZeroes = function(nums) {
    let count = 0
    for(let i=0;i+count<nums.length-1;i++) {
        if(nums[i] === 0) {
            nums.splice(i,1)
            nums.push(0)
            count++
            i--
        }
    }
};

/**
- 내 답안

var moveZeroes = function(nums) {
    let count = 0
    for(let i=0;i+count<nums.length-1;i++) {
        if(nums[i] === 0) {
            nums.splice(i,1)
            nums.push(0)
            count++
            i--
        }
    }
};


- GPT 코드 리뷰

 이 코드는 주어진 배열에서 모든 0을 배열의 끝으로 이동시키는 함수입니다. 이 코드는 배열을 훑으면서 0을 찾고, 이를 배열에서 제거한 다음 배열의 끝에 다시 추가합니다. 이 과정을 0이 없을 때까지 반복합니다.

이 코드는 문제를 해결하지만, 몇 가지 개선점이 있습니다:

1. splice 메서드는 배열에서 요소를 제거하고 나머지 요소를 이동시키므로 시간 복잡도가 O(n)입니다. 이 메서드를 반복적으로 호출하면 전체 시간 복잡도는 O(n^2)가 됩니다.
2. push 메서드는 배열의 끝에 요소를 추가하는 데 시간 복잡도가 O(1)이지만, splice 메서드로 인해 전체 시간 복잡도는 여전히 O(n^2)입니다.
3. count 변수는 0의 개수를 추적하지만, 이는 필요하지 않습니다. i 변수만으로 배열을 훑을 수 있습니다.

이 문제는 두 포인터 기법을 사용하여 O(n)의 시간 복잡도로 해결할 수 있습니다. 하나의 포인터는 0이 아닌 요소를 찾고, 다른 하나의 포인터는 0이 아닌 요소를 삽입할 위치를 가리킵니다. 이렇게 하면 splice와 push 메서드를 사용하지 않고도 배열을 효율적으로 수정할 수 있습니다.


- 개선한 코드 
var moveZeroes = function(nums) {
    let insertPos = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[insertPos++] = nums[i];
        }
    }
    while (insertPos < nums.length) {
        nums[insertPos++] = 0;
    }
};

이 코드는 insertPos 포인터를 사용하여 0이 아닌 요소를 삽입할 위치를 추적합니다. 배열을 훑으면서 0이 아닌 요소를 발견하면, 해당 요소를 insertPos 위치에 삽입하고 insertPos를 증가시킵니다. 배열을 모두 훑은 후, insertPos 위치부터 배열의 끝까지 모든 위치에 0을 삽입합니다. 이 코드의 시간 복잡도는 O(n)이고, 공간 복잡도는 O(1)입니다. 이는 코드가 배열을 한 번만 훑고, 추가적인 공간을 사용하지 않기 때문입니다. 따라서 이 코드는 원래의 코드보다 효율적입니다.
 */