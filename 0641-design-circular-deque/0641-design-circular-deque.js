/**
 * Initialize your data structure here. Set the size of the deque to be k.
 * @param {number} k
 */
var MyCircularDeque = function(k) {
    this.size = k;
    this.tail = 0;
    this.head = 0;
    this.len = 0;
    this.list = [];
};

/**
 * Adds an item at the front of Deque. Return true if the operation is successful. 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function(value) {
    if(!this.isFull()) {
        this.head = (this.head+this.size-1)%this.size;
        this.list[ this.head ] = value;
        this.len++;
        return true;
    }
    return false;
};

/**
 * Adds an item at the rear of Deque. Return true if the operation is successful. 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function(value) {
    if(!this.isFull()) {
        // 注意不应该直接push
        this.list[this.tail] = value;
        this.tail = (this.tail+1)%this.size;
        this.len++;
        return true;
    }
    return false;
};

/**
 * Deletes an item from the front of Deque. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function() {
    if(!this.isEmpty()) {
        this.head = (this.head+1)%this.size;
        this.len--;
        return true;
    }
    return false;
};

/**
 * Deletes an item from the rear of Deque. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function() {
    if(!this.isEmpty()) {
        this.tail = (this.tail+this.size-1)%this.size;
        this.len--;
        return true;
    }
    return false;
};

/**
 * Get the front item from the deque.
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function() {
    if(!this.isEmpty()) {
        return this.list[this.head];
    }
    return -1;
};

/**
 * Get the last item from the deque.
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function() {
     if(!this.isEmpty()) {
        return this.list[ (this.tail+this.size-1)%this.size ];
    }
    return -1;
};

/**
 * Checks whether the circular deque is empty or not.
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function() {
    return this.len==0;
};

/**
 * Checks whether the circular deque is full or not.
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function() {
    return this.len==this.size;
};

/** 
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */