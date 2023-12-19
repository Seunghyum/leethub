/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    if(n===0) return true
    let count = 0
    let fb = [...flowerbed]
    for(let i=0;i<fb.length;i++) {
        if(fb[i] === 0 && checkSideEmpty(fb, i)) {
            count++
            fb[i] = 1
            if(count >= n) return true
        }
    }

    function checkSideEmpty(arr, index) {
        return (arr[index+1] === undefined || arr[index+1] === 0) && (arr[index-1] === undefined || arr[index-1] === 0)
    }
    return false
};