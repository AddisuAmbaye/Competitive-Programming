/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    for(i = 0; i < word.length; i++){
        if(word[i] == ch){
            first = word.slice(0,i+1).split('').reverse().join('')
            second = word.slice(i+1)
            return first.concat(second)
            break
        }
    }
return word
};