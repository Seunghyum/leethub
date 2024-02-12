/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var reverseList = function(head, prev = null) {
    if(!head) return prev
    
    const next = head.next
    head.next = prev
    return reverseList(next, head)
}

// var reverseList = function(head) {
//     if(head === null) return null
    
//     let cur = head
//     const arr = []
//     arr.push(cur)
//     while(cur.next) {
//         cur = cur.next
//         arr.push(cur)
//     }
    
//     for(let i=arr.length-1;i>=0;i--) {
//         arr[i].next = arr[i-1] || null
//     }
    
//     return arr[arr.length-1]
// };