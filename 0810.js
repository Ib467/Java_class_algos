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
        var newNode = new SLNode(newVal)
        if (this.head != null){
            this.head = newNode
        }
        else{
            newNode.next = this.head
            this.head = newNode
        }
    
    }
    pop() {
        // remove and return data at top of stack
        if (this.head != null){
            var tempHead = this.head.value
            if (this.head.next != null){
                this.head = this.head.next
                this.head.next = null
            }
            this.head = null;
            return tempHead
        }
    }
    
    peek() {
        // return data at top of stack without removing
        if (list.head != null){
            return list.head.value
        }
    }

    contains(value) {
        // return true if SLStack contains value
        // return false if SLStack does not contain value
        if (this.head !=null){
            var runner = this.head;
            while(runner.next !=null){
                if(runner.value ==value){
                    return true
                    runner = runner.next
                }
            }
            if (runner.value == value){
                return true
            }
            else{return false}
        }
    
    }
    isEmpty() {
        // return true if SLStack is empty
        // return false if SLStack is not empty
        if (this.head == null){
            return true
        }
        else{
            return false
        }
    }
    size() {
        // return length of SLStack
        var count =0;
        if (this.head != null){
            var runner = this.head
            while(runner.next != null){
                count ++
                runner = runner.next
            }
            count ++
        }
    }
    print() {
        // print out the values of the SLStack
        if (this.head != null){
            var runner = this.head
            while(runner.next != null){
                console.log(runner.value)
                runner = runner.next
            }
            console.log(runner.value)
        }
}
