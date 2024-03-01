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
    if(!head) return head
    const address = []
    let cur = head, count = 0
    while(cur) {
        address.push(cur)
        count++
        cur = cur.next
    }
    
    count = Math.ceil(count/2) + (count%2 === 1 ? -1 : 0)
    console.log('count : ', count)
    if(count) address[count-1].next = address[count+1] || null
    else return null
    
    return head
};