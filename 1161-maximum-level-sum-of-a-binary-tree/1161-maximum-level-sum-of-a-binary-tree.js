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
 * @return {number}
 */
var maxLevelSum = function(root) {
    let tree = []
    dfs(root, 0)
    
    let max = - Math.pow(10,5)
    let maxIndex = 0

    for(let i=0;i<tree.length;i++) {
        if(max<tree[i]) {
            max = tree[i]
            maxIndex = i
        }
    }

    return maxIndex + 1
    function dfs(node, depth) {
        if(node === null) return
        if(tree[depth] === undefined) tree[depth] = node.val
        else tree[depth] += node.val
        dfs(node.left, depth+1)
        dfs(node.right, depth+1)
    }
};
/**
- 내가 푼 답안 - dfs
var maxLevelSum = function(root) {
    let tree = []
    dfs(root, 0)
    
    let max = - Math.pow(10,5)
    let maxIndex = 0

    for(let i=0;i<tree.length;i++) {
        if(max<tree[i]) {
            max = tree[i]
            maxIndex = i
        }
    }

    return maxIndex + 1
    function dfs(node, depth) {
        if(node === null) return
        if(tree[depth] === undefined) tree[depth] = node.val
        else tree[depth] += node.val
        dfs(node.left, depth+1)
        dfs(node.right, depth+1)
    }
};

- 더 좋은 답안 bfs

var maxLevelSum = function (root) {
    let ans = 1;
    if (!root) return ans;

    let qu = [root];
    let maxSum = root.val;
    let height = 1;
    while (qu.length) {
        const n = qu.length;
        let sum = 0;
        for (let i = 0; i < n; i++) {
            const node = qu.shift();
            sum += node.val;
            if (node.left) qu.push(node.left);
            if (node.right) qu.push(node.right);
        }
        if(sum > maxSum){
            maxSum = sum;
            ans = height;
        }

        height++;
    }
    return ans;
};

 */