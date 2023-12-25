/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

const lowestCommonAncestor = (root, p, q) => {
    if(!root || root.val === p.val || root.val === q.val) return root
    const left = lowestCommonAncestor(root.left, p,q)
    const right = lowestCommonAncestor(root.right,p,q)
    
    if(!left) return right
    if(!right) return left
    return root
};

/**

var lowestCommonAncestor = function(root, p, q) {
    let path1 = []
    let path2 = []

    traverseAncestor(root)

    const short = path1.length > path2.length ? path2 : path1
    const long = (path1.length > path2.length ? path1 : path2).map(e => e.val)
    // const long = path1.length > path2.length ? path1 : path2

    console.log('path1 : ', path1)
    console.log('path2 : ', path2)
    console.log('short : ', short)
    console.log('long : ', long)

    for(let i=0;i<short.length; i++) {
        console.log('!!!!!!!')
        console.log('short[i].val : ', short[i].val)
        console.log('typeof short[i].val : ', typeof short[i].val)
        console.log('long : ', long)
        console.log('typeof long : ', typeof long)
        console.log('short[i].val in long : ', short[i].val in long)
        // if(short[i].val in long) return short[i]
        if(long.includes(short[i].val)) return short[i]
    }

    // for(const s of short) {
    //     console.log('s : ', s)
    //     console.log('s in long : ', s in long)
    //     if(s in long.entries()) return s
    // }

    function traverseAncestor(root, a1 = [], a2 = []) {
        if(root.val === null) return

        const na1 = [...a1,root]
        const na2 = [...a2,root]
        // const na1 = [...a1, root]
        // const na2 = [...a2, root]

        const values1 = na1.map(e => e.val)
        const values2 = na2.map(e => e.val)

        if(p.val in values1 || p.val in values2 || q.val in values1 || q.val in values2) {
            if(path1.length === 0) path1 = na1
            else path2 = na2
        }
        // if(p.val in na2) path2 = na2
        
        console.log('======')
        console.log('na1 : ', na1)
        console.log('values1 : ', values1)
        console.log('p.val in values1 || p.val in values2 : ', p.val in values1 || p.val in values2)
        console.log('na2 : ', na2)
        console.log('values2 : ', values2)
        console.log('q.val in values1 || q.val in values2 : ', q.val in values1 || q.val in values2)
        if(path1.length > 0 && path2.length > 0) return 
        if(root.left) traverseAncestor(root.left, na1, na2)
        if(root.right) traverseAncestor(root.right, na1, na2)
        
    }
};

- 더 좋은 답안
    - recursive 함수는 밑에서 부터 시작.
    - leaf 부터 시작해서 left, right 중 있는값의 root를 계속 반환하면서 위로 올라감
const lowestCommonAncestor = (root, p, q) => {
    if (!root || root === p || root === q) return root
    console.log('!!! root : ', root)
    const left = lowestCommonAncestor(root.left, p, q)
    const right = lowestCommonAncestor(root.right, p, q)
    console.log('left : ', left)
    console.log('right : ', right)
    if (!left) return right  // p and q are in the right subtree
    if (!right) return left  // p and q are in the left subtree
    return root              // p is in one side and q is in the other
}
*/