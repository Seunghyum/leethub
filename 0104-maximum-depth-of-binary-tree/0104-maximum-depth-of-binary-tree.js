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

var maxDepth = function(root) {
    let count = 0
    function dfs(node, n) {
        if(!node) return
        if(node.left !== null) {
            dfs(node.left, n+1)
        }
        if (node.right !== null) {
            dfs(node.right, n+1)
        } 
        if(node.left === null && node.right === null) {
            count = Math.max(count, n+1)
        }
    }
    dfs(root, 0)
    return count
};

/*
더 좋은 답안
var maxDepth = function(root) {
    // Base case...
    // If the subtree is empty i.e. root is NULL, return depth as 0...
    if(root == null)  return 0;
    // if root is not NULL, call the same function recursively for its left child and right child...
    let leftDepth = maxDepth(root.left);
    let rightDepth = maxDepth(root.right);
    // When the two child function return its depth...
    // Pick the maximum out of these two subtrees and return this value after adding 1 to it...
    return Math.max(leftDepth, rightDepth) + 1;    // Adding 1 is the current node which is the parent of the two subtrees...
};
*/
