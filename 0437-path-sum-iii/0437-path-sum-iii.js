/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function(root, targetSum) {
    let answer = 0
    dfs(root, [])
    function dfs(node, arr) {
        if(node) {
            const newArr = arr.map(e => e + node.val)
            newArr.push(node.val)
            answer += newArr.filter(e => e === targetSum).length
            if(node.left) {
                dfs(node.left, newArr)
            }
            if(node.right) {
                dfs(node.right, newArr)
            }
        }
    }  
    return answer
};

/**
- 더 좋은 코드가 있을까?

이 문제를 해결하는 더 효율적인 방법은 "prefix sum" 기법을 사용하는 것입니다. 이 기법은 경로의 합을 계산하는 데 필요한 시간을 줄여줍니다. 아래는 이 기법을 사용한 코드입니다:

var pathSum = function(root, targetSum) {
    let answer = 0;
    const cache = {0: 1};

    function dfs(node, currSum) {
        if (!node) return;
        currSum += node.val;
        answer += (cache[currSum - targetSum] || 0);
        cache[currSum] = (cache[currSum] || 0) + 1;
        dfs(node.left, currSum);
        dfs(node.right, currSum);
        cache[currSum] -= 1;
    }

    dfs(root, 0);
    return answer;
};

이 코드는 cache라는 객체를 사용하여 경로의 합을 저장합니다. 이는 각 경로의 합이 몇 번 나타나는지 추적합니다. 이를 통해 각 노드에서 경로의 합을 즉시 계산할 수 있습니다. 이 코드의 시간 복잡도는 O(n)이며, 이는 트리의 모든 노드를 한 번만 탐색하기 때문입니다. 공간 복잡도는 O(n)입니다. 이는 재귀 호출 스택과 cache 객체에 필요한 공간 때문입니다. 이 코드는 원래의 코드보다 효율적입니다.

- prefix sum 기법이 뭐야?

"prefix sum"이란 배열에서 각 인덱스까지의 합을 미리 계산해 놓은 것을 말합니다. 이 기법은 주로 배열의 특정 범위에 대한 합을 빠르게 계산하는 데 사용됩니다.

예를 들어, 배열 [1, 2, 3, 4, 5]가 있다고 가정해 보겠습니다. 이 배열의 prefix sum 배열은 [1, 3, 6, 10, 15]가 됩니다. 여기서 3은 원래 배열의 첫 번째와 두 번째 요소의 합이고, 6은 원래 배열의 첫 세 요소의 합이며, 이런 식으로 계속됩니다.

이제 원래 배열의 특정 범위, 예를 들어 인덱스 1부터 3까지의 합을 계산하려면, prefix sum 배열의 3번째 요소에서 1번째 요소를 빼면 됩니다. 즉, 10 - 1 = 9가 됩니다. 이는 원래 배열의 두 번째부터 네 번째 요소의 합과 같습니다.

이 기법은 배열의 특정 범위에 대한 합을 O(1)의 시간 복잡도로 계산할 수 있게 해줍니다. 그러나 prefix sum 배열을 만드는 데는 O(n)의 시간 복잡도가 필요하며, 이는 원래 배열의 길이에 비례합니다.
 */