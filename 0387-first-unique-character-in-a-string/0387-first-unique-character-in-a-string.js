/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
       map = new Map()
    for(i = 0; i < s.length; i++){
        if(map.has(s[i])){
            val = map.get(s[i])
            map.set(s[i],val + 1)
        }
        else{
            map.set(s[i],1)
        }
    }
    for(i = 0; i < s.length; i++){
        if(map.get(s[i]) == 1){
            return i
            break
        }
    }
    return -1
};