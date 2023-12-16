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
    zigZagPathCount(root, 0, false)
    zigZagPathCount(root, 0, true)
    return answer
    
    function zigZagPathCount(node, num, isLeft) {
        if(!node) return

        answer = Math.max(answer,num)
        zigZagPathCount(node.left, isLeft === true ? num+1 : 1, false)
        zigZagPathCount(node.right, isLeft === false ? num+1 : 1, true)

    }
};

/**
    
- dfs로 푼 답안
    
var longestZigZag = function(root) {
    let answer = 0
    zigZagPathCount(root, 0, false)
    zigZagPathCount(root, 0, true)
    return answer
    
    function zigZagPathCount(node, num, isLeft) {
        if(!node) return

        answer = Math.max(answer,num)
        zigZagPathCount(node.left, isLeft === true ? num+1 : 1, false)
        zigZagPathCount(node.right, isLeft === false ? num+1 : 1, true)

    }
};

- 더 좋은 답안

var longestZigZag = function(root) {
    
    let max = 0

    function recursiveTraversal(node,parent){

        if(!node){
            return 0
        }

        const left = recursiveTraversal(node.left,"left")
        const right = recursiveTraversal(node.right,"right")

        max = Math.max(left,right,max)

        if(parent==="left"){
            return 1 + right
        }

        return 1 + left

    }
    
    recursiveTraversal(root)
    return max
};


 */