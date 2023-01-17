/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    if(!tasks || !tasks.length) {
        return 0;
    }
    const arr = Array(26).fill(0);
    tasks.forEach((x) => {
        arr[x.charCodeAt(0) - 'A'.charCodeAt(0)]++;
    });
    
    let result = 0;
    arr.sort((a,b) => b-a);
    while(arr[0] > 0) {
        let i = 0;
        while(i < n+1) {
            if(arr[0] === 0 && arr[i] === 0) {
                break;
            }
            if(arr[i] > 0) {
                arr[i]--;
            } 

            result++;
            i++;
        }
        arr.sort((a,b) => b-a);
    }
    return result;
};