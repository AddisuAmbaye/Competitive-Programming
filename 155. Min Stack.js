/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.min = 0;
  this.length = 0;
  this.stack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  if (!this.length || x <= this.min) {
    this.stack.push(this.min);
    this.min = x;
  }
  this.stack.push(x);
  this.length++;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  if (!this.length) return;
  var val = this.stack.pop();
  if (val === this.min) {
    this.min = this.stack.pop();
  }
  this.length--;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.length ? this.stack[this.stack.length - 1] : 0;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.min;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.Node = function (val) {
    this.val = val;
    this.min = 0;
    this.next = null;
  };
  this.head = null;
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  var node = new this.Node(x);
  if (this.head) {
    node.next = this.head;
    node.min = Math.min(x, this.head.min);
  } else {
    node.min = x;
  }
  this.head = node;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  if (this.head) this.head = this.head.next;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.head ? this.head.val : 0;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.head ? this.head.min : 0;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
