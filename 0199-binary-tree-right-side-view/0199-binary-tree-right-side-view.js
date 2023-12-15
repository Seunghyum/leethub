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
 * @return {number[]}
 */
var rightSideView = function(root) {
    answer = []
    function bfs(node, depth) {
        if(!node) return
        if(answer[depth] === undefined) answer[depth] = node.val
        if(node.right) bfs(node.right, depth + 1)
        if(node.left) bfs(node.left, depth + 1)
    }  
    bfs(root, 0)
    return answer
};

/**
- 내 답안
var rightSideView = function(root) {
    answer = []
    function bfs(node, depth) {
        if(!node) return
        if(answer[depth] === undefined) answer[depth] = node.val
        if(node.right) bfs(node.right, depth + 1)
        if(node.left) bfs(node.left, depth + 1)
    }  
    bfs(root, 0)
    return answer
};

- 더 깔끔한 답안

const rightSideView = (
  root: TreeNode | null,
  answer: number[] = [],
  depth = 0
): number[] => {
  if (!root) return answer;
  answer[depth] = root.val;
  rightSideView(root.left, answer, depth + 1);
  return rightSideView(root.right, answer, depth + 1);
};

 */