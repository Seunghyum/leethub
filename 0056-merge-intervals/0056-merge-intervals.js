/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a,b) => a[0] - b[0])
    // let start=intervals[0][0], end = intervals[0][1], flag=false
    for(let i=1;i<intervals.length;i++){
        // console.log('=== intervals : ', intervals)
        // console.log('end < intervals[i][0] : ', end < intervals[i][0])
        if(intervals[i-1][1] < intervals[i][0]) {
            continue
        }
        
        let start = intervals[i-1][0] < intervals[i][0] ? intervals[i-1][0] : intervals[i][0]
        let end = intervals[i-1][1] > intervals[i][1] ? intervals[i-1][1] : intervals[i][1]
        // console.log('start : ', start)
        // console.log('end : ', end)
        intervals.splice(i-1,2,[start, end])
        i--
    }
    return intervals
};