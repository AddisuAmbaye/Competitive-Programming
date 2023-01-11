/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
const validateStackSequences = function(pushed, popped) {
    const stack = []
    let i = 0

    for (el of pushed) {
        stack.push(el)
        while (stack.length != 0 && stack[stack.length - 1] === popped[i]) {
            stack.pop()
            i++
        }
    }
    
    return pushed.length === i
}
