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
    bfs(root, 0)
    
    let max = - Math.pow(10,5)
    let maxIndex = 0

    for(let i=0;i<tree.length;i++) {
        if(max<tree[i]) {
            max = tree[i]
            maxIndex = i
        }
    }

    return maxIndex + 1
    function bfs(node, depth) {
        if(node === null) return
        if(tree[depth] === undefined) tree[depth] = node.val
        else tree[depth] += node.val
        bfs(node.left, depth+1)
        bfs(node.right, depth+1)
    }
};