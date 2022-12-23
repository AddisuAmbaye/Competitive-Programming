var mergeAlternately = function(word1, word2) {
	let res = '', n, tail
    
	if (word1.length > word2.length){
		n = word2.length
		tail = word1.substring(n)
    }
	else{
		n = word1.length
		tail = word2.substring(n)
    }

	for (let i = 0; i < n; i++){
		res += word1[i] + word2[i]
    }
	return res+tail
};