/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    return bs(0,x)
    function bs(start=0, end=x) {
        while(start<end) {
            const mid = start + Math.floor((end - start + 1)/2)
            console.log('mid : ', mid)
            
            if(mid**2 === x) return mid
            else if(mid**2 >= x && (mid-1)**2 < x) {
                return mid-1
            } else if(mid**2 >= x) {
                return bs(start, mid-1)
            } else if(mid**2 < x) {
                return bs(mid, end)
            }
        }
        return 0
    }
    
};