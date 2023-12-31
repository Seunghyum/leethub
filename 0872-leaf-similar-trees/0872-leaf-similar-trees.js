/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    dfs = function(node, leaves) {
        if (node != null) {
            if (node.left == null && node.right == null) {
                leaves.push(node.val);
            }
            dfs(node.left, leaves);
            dfs(node.right, leaves);
        }
    }
    let leaves1 = [];
    let leaves2 = [];
    dfs(root1, leaves1);
    dfs(root2, leaves2);

    return (leaves1.length == leaves2.length &&
            leaves1.every((v, i) => v === leaves2[i]));
};


/**
- 내 첫 답안
function getLeaves(node) {
    const isLeaf = node.left === null || node.right === null
    if(isFirst && node.left === null && node.right === null) {
        arr.push(node.val)
        return arr
    }
    if (!isFirst && isLeaf) {
        arr.push(node.val)
    }
    if(node.left !== null) {
        getLeavesValue(node.left, arr)
    }
    if(node.right !== null) {
        getLeavesValue(node.right, arr)
    }
    return arr
}
 */