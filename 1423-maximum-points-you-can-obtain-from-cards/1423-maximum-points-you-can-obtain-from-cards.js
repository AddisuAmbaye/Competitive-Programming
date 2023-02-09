/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function(cardPoints, k) {
    let size = cardPoints.length;
    let [left, right] = [k-1, size-1];
    
    // Initial pick: take all k cards from left hand side
    let currentPick = cardPoints.slice(0,k).reduce( (x, y) => x+y, 0);
    let maxPoint = currentPick;
    
    // adjustment
    for(let i = 0 ; i < k ; i++ ){
        
        // left hand side discards one, and right hand side picks one more
        currentPick += ( cardPoints[right] - cardPoints[left] );
        
        // update max point
        maxPoint = Math.max( maxPoint, currentPick );
        
        // update card index for both sides in adjustment
        [left, right] = [left-1, right-1];
        
    }
    
    return maxPoint;
};