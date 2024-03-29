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

var deleteDuplicates = function(head) {
    if(!head || !head?.next) return head
    let cur = head
    while(cur && cur?.next) {
        
        if(cur.val === cur.next.val) {
            cur.next = cur.next.next
        } else {
            cur = cur.next
        }
    }
    return head
};

// var deleteDuplicates = function(head) {
//     deleteNode(head)
//     return head
//     function deleteNode(head, next = head?.next) {
//         if(!head) return
//         if(next?.val === head.val) {
//            head.next = next.next
//            deleteDuplicates(head, next)
//         } else {
//             deleteDuplicates(next, next?.next)
//         }
//     }
// };