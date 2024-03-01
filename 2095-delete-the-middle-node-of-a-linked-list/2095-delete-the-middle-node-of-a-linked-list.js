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

var deleteMiddle = function(head) {
    if(!head) return null
    
    let prev = slow = new ListNode(0,head)
    let fast = head
    
    while(fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }
    
    slow.next = slow.next?.next
    
    return prev.next
}

// var deleteMiddle = function(head) {
//     if(!head) return head
//     const address = []
//     let cur = head, count = 0
//     while(cur) {
//         address.push(cur)
//         count++
//         cur = cur.next
//     }
    
//     count = Math.ceil(count/2) + (count%2 === 1 ? -1 : 0)
//     console.log('count : ', count)
//     if(count) address[count-1].next = address[count+1] || null
//     else return null
    
//     return head
// };