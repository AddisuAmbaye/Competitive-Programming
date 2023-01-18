/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let len = height.length;
    let l = 0;
    let r = len - 1;
    let maxAre = height[r] > height[l] ? height[l]*(r-l):height[r]*(r-l);
    while(l < r){
        if(height[l] < height[r]){
            let temp = (height[l]) * (r-l)
            maxAre = Math.max(temp,maxAre)
            l++;
        }else{
            let temp = (height[r]) * (r-l)
            maxAre = Math.max(temp,maxAre)
            r--;
        }
    }
    return maxAre
};