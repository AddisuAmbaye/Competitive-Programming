/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    let n = citations.length;
    if(n===0) return 0;

    let bucket = new Array(n+1).fill(0);
    for(let c of citations){
        if(c>=n){
            bucket[n]++;
        }else{
            bucket[c]++;
        }
    }

    let count = 0;
    for(let i=n; i>=0; i--){
        count+= bucket[i];
        if(count >= i){
            return i;
        }
    }
    return 0;

};