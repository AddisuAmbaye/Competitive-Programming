/**
 * @param {number[]} A
 * @return {number[]}
 */
var pancakeSort = function(A) {
    let k = [];
    while(A.length > 0){
		// Get max value as we have a ;ermutation of [1,2...n] using index
        let maxIndex = A.indexOf(A.length);
        reverse(A, maxIndex)
        k.push(maxIndex + 1);
        reverse(A, A.length - 1)
        k.push(A.length);
        A.pop();
    }
    return k
};

reverse = function(A, i){
    let start = 0;
    while(start < i){
        temp = A[start];
        A[start] = A[i];
        A[i] = temp;
        start++
        i--
    }
}

