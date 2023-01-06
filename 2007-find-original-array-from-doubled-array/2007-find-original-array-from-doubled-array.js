/**
 * @param {number[]} changed
 * @return {number[]}
 */
var findOriginalArray = function(changed) {
    const n = changed.length
    if(n%2 === 1) return []
    
    let original = []
    let map = new Map()
    
    changed.sort((a,b) => {
        return a-b
    })
    
    for(let ele of changed) {
        const half = ele/2
        if(map.has(half) && map.get(half) > 0) {
            original.push(half)
            map.set(half, map.get(half)-1)
        } else {
            map.set(ele, map.has(ele) ? map.get(ele)+1: 1)
        }
    }
    
    if(original.length !== n/2) return []
    
    return original
};