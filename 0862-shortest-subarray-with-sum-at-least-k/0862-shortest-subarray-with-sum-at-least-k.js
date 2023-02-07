/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var shortestSubarray = module.exports = function(A, K) {
    var distancesToK = new Array(A.length);
    var minimumDist = -1;
    for (var i = 0; i < A.length; i++) {
        distancesToK[i] = shortestDistanceToK(A, K, i);
        if (distancesToK[i] > 0 && ((distancesToK[i] < minimumDist) || (minimumDist == -1))) {
            minimumDist = distancesToK[i];
        }
    }
    
    return minimumDist;
};
var shortestDistanceToK = function(A, K, start) {
    var minDist = -1;
    var currCounter = 0;
    
    for (var j = start; j < A.length; j++) {
        currCounter += A[j];
        if (currCounter >= K) {
            return (j - start + 1);
        }
        if (currCounter < 0 || minDist != -1) {
            return minDist;
        }
    }
    
    return minDist;
}