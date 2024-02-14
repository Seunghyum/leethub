/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {
    if(!obj) return false
    if(typeof obj !== 'object') return obj
    
    if(Array.isArray(obj)) {
        obj = obj.filter(Boolean).map(compactObject)
    } else {
        for(const key in obj) {
            if(!obj[key]) delete obj[key]
            if(typeof obj[key] === 'object') obj[key] = compactObject(obj[key])
        }
    }
    
    return obj
};