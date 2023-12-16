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
var longestZigZag = function(root) {
    let answer = 0
    zigZagPathCount(root, 0, false, 1)
    zigZagPathCount(root, 0, true, 1)
    return answer
    
    function zigZagPathCount(node, num, isLeft, depth) {
        if(!node) return

        answer = Math.max(answer,num)
        if(isLeft) {
            zigZagPathCount(node.left, num+1, !isLeft, depth)
            zigZagPathCount(node.right,  1, isLeft, depth)
        } else {
            zigZagPathCount(node.left, 1, isLeft, depth)
            zigZagPathCount(node.right, num+1, !isLeft, depth)
        }
    }
};