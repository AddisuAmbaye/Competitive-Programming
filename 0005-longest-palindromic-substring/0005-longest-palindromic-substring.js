/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(str) {
    


	let n = str.length; 
	if (n < 2)
		return str;

	let maxLength = 1,start=0;
	let low, high;
	for (let i = 0; i < n; i++) {
		low = i - 1;
		high = i + 1;
		while ( high < n && str[high] == str[i]) //increment 'high'								
			high++;
	
		while ( low >= 0 && str[low] == str[i]) // decrement 'low'				
			low--;
	
		while (low >= 0 && high < n && str[low] == str[high]){
			low--;
			high++;
		}

		let length = high - low - 1;
		if (maxLength < length) {
			maxLength = length;
			start=low+1;
		}
	}
	
        return str.substring(start,maxLength+start);

};