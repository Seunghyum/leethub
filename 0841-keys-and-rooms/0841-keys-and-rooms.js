/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms, visit=0, memo = new Set()) {
    for (const r of rooms[visit]) {
        memo.add(visit)
        if(!memo.has(r)) {
            memo.add(r)
            canVisitAllRooms(rooms, r, memo)
        }
    }
    
    if(memo.size >=  rooms.length) return true
    return false
};