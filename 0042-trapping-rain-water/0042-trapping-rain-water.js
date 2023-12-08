/**
 * @param {number[]} height
 * @return {number}
 */

var trap = function(height) {
    let left = 0, right = height.length - 1;
    let maxLeft = 0, maxRight = 0;
    let water = 0;

    while (left < right) {
        if (height[left] <= height[right]) {
            if (height[left] >= maxLeft) {
                maxLeft = height[left];
            } else {
                water += maxLeft - height[left];
            }
            left++;
        } else {
            if (height[right] >= maxRight) {
                maxRight = height[right];
            } else {
                water += maxRight - height[right];
            }
            right--;
        }
    }

    return water;
};

/* 
- 내가 푼 방법 (오답)
var trap = function(height) {
    let left = 0
    let water = 0
    let right = 2

    while(left<height.length-2) {
        if(height[left] <= height[left+1]) {
            left++
            continue
        }
        let lastRight = -1
        let lastLeft = left
        right = left+2

        let isAsc = true

        while(right<=height.length-1) {
            if(height[right] >= height[lastLeft]) {
                left = right -1
                lastRight = right
                break
            } else if(height[right-1] > height[right]) { // desc
                isAsc = false
            } else if(height[right-1] < height[right] && height[lastRight] < height[right]) {  //asc
                isAsc = true
                lastRight = right
                break;
            } else if(isAsc){ // same
                lastRight = right
            }
            right++
        }

        if(lastRight > lastLeft) {
          const indexArr = Array(lastRight-lastLeft+1).fill(0).map((e,i) => lastLeft + i)

          const h = height[lastRight] <= height[lastLeft] ? height[lastRight] : height[lastLeft]
          for(const idx of indexArr) {
              water += h - (height[idx] > h ? h : height[idx])
          }
        }
        left++
    }
    return water

    return water
};

- GPT 코드리뷰
1. 코드의 복잡성: 이 코드는 다양한 조건과 루프를 사용하여 문제를 해결하려고 시도하고 있습니다. 이로 인해 코드가 복잡해지고 이해하기 어려워집니다.
2. 효율성: 이 코드는 두 개의 중첩 루프를 사용하므로, 시간 복잡도는 O(n^2)입니다. 이 문제는 두 개의 포인터를 사용하여 O(n)의 시간 복잡도로 해결할 수 있습니다.

따라서 이 코드는 개선이 필요합니다. 두 포인터 기법을 사용하여 코드를 단순화하고 효율성을 향상시킬 수 있습니다.


- 더 좋은 답안

var trap = function(height) {
    let left = 0, right = height.length - 1;
    let maxLeft = 0, maxRight = 0;
    let water = 0;

    while (left < right) {
        if (height[left] <= height[right]) {
            if (height[left] >= maxLeft) {
                maxLeft = height[left];
            } else {
                water += maxLeft - height[left];
            }
            left++;
        } else {
            if (height[right] >= maxRight) {
                maxRight = height[right];
            } else {
                water += maxRight - height[right];
            }
            right--;
        }
    }

    return water;
};

이 코드는 left와 right 포인터를 사용하여 배열을 한 번만 훑습니다.
left 위치의 높이가 right 위치의 높이보다 낮거나 같으면 left를 증가시키고, 그렇지 않으면 right를 감소시킵니다.
이 과정에서 maxLeft와 maxRight를 갱신하고, 물의 양을 계산합니다. 
이 코드의 시간 복잡도는 O(n)이고, 공간 복잡도는 O(1)입니다. 
이는 코드가 배열을 한 번만 훑고, 추가적인 공간을 사용하지 않기 때문입니다. 
따라서 이 코드는 원래의 코드보다 효율적입니다.

*/