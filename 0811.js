class SLNode{
    constructor(value){
      this.value = value
      this.next = null
    }
}

class SLStack {
    constructor() {
        this.head = null;
    }
    push(newVal) {
        // push newVal to top of stack
    }
    pop() {
        // remove and return data at top of stack
    }
    peek() {
        // return data at top of stack without removing
    }
    contains(value) {
        // return true if SLStack contains value
        // return false if SLStack does not contain value
    }
    isEmpty() {
        // return true if SLStack is empty
        // return false if SLStack is not empty
    }
    size() {
        // return length of SLStack
    }
    print() {
        // print out the values of the SLStack
    }
}


// TUE
// FIFO - QUEUES

class SLQueue {
    constructor() {
      this.head = null;
      this.tail = null;
      this.size = 0;
    }
  
    // Time: O(1) constant
    // Space: O(1)
    isEmpty() {
      return this.head === null;
    }
  
    // Time: O(1) constant
    // Space: O(1)
    enqueue(newVal) {
        var newNode = new SLNode(newVal)
        if(this.head == null){
            this.head == newNode
            this.tail == newNode
        }
        else{
            this.tail.next = newNode // 3,4,5,6
            this.tail = newNode
        }
        this.size ++
        // ADD NODE TO THE BACK
      // INCREMENT SIZE
    }
  
    // Time: O(1) constant
    // Space: O(1)
    dequeue() {
        var firstVal = this.head.value
        if(this.head == this.tail){
            this.head = null
        }
        this.head = this.head.next //4
        this.size --
        return firstVal;
    }
  
    // Time: O(1) constant
    // Space: O(1)
    front() {
      // RETURN THE VALUE OF THE HEAD
    return this.head.value
    }
  
    // Time: O(n) linear
    // Space: O(1)
    contains(val) {
      let runner = this.head;
  
      while (runner) {
        if (runner.val === val) return true;
        runner = runner.next;
      }
      return false;
    }
  
    // Time: O(n) linear
    // Space: O(n)
    print() {
      let runner = this.head;
      let vals = "";
  
      while (runner) {
        vals += `${runner.value}${runner.next ? ", " : ""}`;
        runner = runner.next;
      }
      console.log(vals);
      return vals;
    }
  
    /* 
      Queue: Is Palindrome
      Output: Bool representing if the queue items are a palindrome (items same forwards as reversed)
      
      Restore Queue to original state before returning.
      For storage, use one additional Stack only.
      You CAN use vars to store a dequeued and/or popped item, 
      but NO string concatenating the entire queue, no 2nd stack, 2nd queue, or arrays.
      
    */h
  
    /* 
      Approach:
      1. loop over fixed-length of queue
        - dequeue each item and push it into the stack
        - enqueue each item back into the queue to preserve it's order
      2. loop over fixed-length of queue and check equality of popped & dequeued vals
        - enqueue each dequeued item back into the queue to preserve it's order
      Time: O(2n) -> O(n) linear, n = queue length
      Space: O(n) from the stack being used
    */

   push(newVal) {
    // push newVal to top of stack
    var newNode = new SLNode(newVal)
    if (this.head != null){
        this.head = newNode
    }
    else{
        newNode.next = this.head
        this.head = newNode
    }

}

  
    isPalindrome(){
        var stack = new Stack()
        // Loop through the size of the queue and fill stack 
        // with letters
        runner = this.head
        stack.push(runner)
        if(runner.next != null){
            stack.push(runner)
            runner = runner.next
        }
        stack.push(runner)

        return (stack == queue)
        // var forward = "" //-> "abcba"
        // var backwards "" // -> should be same
        // runner that adds each letter to forward
        // runner that adds each letter going backwards from end to front
        // return (forward == backwards)
    }
  
    // Time: O(n) linear since enqueue is O(1), n = vals.length
    // Space: O(1)
  }
  
  var queue = new SLQueue()
  queue.enqueue('a')
  queue.enqueue('b')
  queue.enqueue('c')
  queue.enqueue('b')
  queue.enqueue('a')
  queue.isPalindrome()