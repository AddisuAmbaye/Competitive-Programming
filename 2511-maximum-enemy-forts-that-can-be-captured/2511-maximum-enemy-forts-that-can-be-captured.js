/**
 * @param {number[]} forts
 * @return {number}
 */
/**
 * @param {number[]} forts
 * @return {number}
 */
var captureForts = function(forts) {
    let s = -1, e = -1;
    let zerosCount = 0;
    let ans = 0;
    while(e < forts.length) {
        e++;
        let val = forts[e];
        if(val === 1 && s >= 0) {
            let sVal = forts[s];
            if(sVal + val === 0) {
                if(zerosCount > ans) {
                    ans = zerosCount;
                }
            }
            zerosCount = 0;
            s = e;
        } else if(val === 0) {
            zerosCount += 1;
        } else if(val === -1 && s >= 0) {
            let sVal = forts[s];
            if(sVal + val === 0) {
                if(zerosCount > ans) {
                    ans = zerosCount;
                }
            }
            zerosCount = 0;
            s = e;
        } else {
            zerosCount = 0;
            s = e;
        }
    }
    return ans;
};