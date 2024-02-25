/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a,b) => a[0] - b[0])
    for(let i=1;i<intervals.length;i++){
        if(intervals[i-1][1] < intervals[i][0]) {
            continue
        }
        
        let start = intervals[i-1][0] < intervals[i][0] ? intervals[i-1][0] : intervals[i][0]
        let end = intervals[i-1][1] > intervals[i][1] ? intervals[i-1][1] : intervals[i][1]
        intervals.splice(i-1,2,[start, end])
        i--
    }
    return intervals
};