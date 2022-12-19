/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
     str = s.split('')
     vowels = ['a','e','i','o','u','A','E','I','O','U']
     left = 0
     right = s.length - 1
    if(s.length <= 1) return s
    while(left < right){
        if(vowels.includes(str[left]) && vowels.includes(str[right])){
             temp = s[left]
            str[left] = str[right]
            str[right] = temp
             right--
             left++
        }
        else if(vowels.includes(str[left].toLowerCase()))
        {  
            right--
            
        }
        
        
        else{ 
        
            left++
        }
    }
    return str.join('')
};