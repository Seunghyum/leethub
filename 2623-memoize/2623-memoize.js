/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const map = new Map()
    return function(...args) {
        const str = args.join(',')
        if(!map.has(str)) {
            map.set(str, fn(...args))
        }
        return map.get(str)
    }
}



/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */