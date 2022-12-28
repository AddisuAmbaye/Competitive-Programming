var reverseWords = function(s) {
    const arr = s.split(" ")
    
    for(let i = 0; i < arr.length; i++) {
        arr[i] = reverseString(arr[i])
    }
    
    return arr.join(" ")
};

function reverseString(str) {
    return str.split("").reverse().join("");
}