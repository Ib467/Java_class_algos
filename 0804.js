class SLNode{
    constructor(value){
      this.value = value
      this.next = null
    }
  }
  
  class SLL{
    constructor(){
      this.head = null
    }
    printAllValues(){
      if(this.head ===  null){
        console.log('LIST IS EMPTY')
      }
      var runner = this.head
      while(runner.next != null){
          console.log(runner.value)
          runner = runner.next
      }
      console.log(runner.value)
    }
  
    isEmpty(){
      if(this.head === null){
        return true
      }
      else{
        return false
      }
    }
  
    push(value){
      // 1. CREATING A NEW NODE WHEN THE LIST IS EMPTY
      var newNode = new SLNode(value)
      if(this.head === null){
        this.head = newNode
        return
      }
      // 2. CREATING A NEW NODE WHEN THE LIST IS NOT EMPTY
      var runner = this.head
      while(runner.next != null){
        runner = runner.next
      }
      runner.next = newNode
    };
  
    insertAtFront(value){
      var newNode = new SLNode(value)
      newNode.next = this.head
      this.head = newNode
      
      
    };
    removeAtFront(){
      var removeNode = this.head
      this.head = this.head.next
      var removeNode = null
    };
  
  };
  
  var list = new SLL();
  list.push(1)
  list.push(2)
  list.push(3)
  list.push(4)
  
  list.insertAtFront(6)
  list.printAllValues()
  list.removeAtFront()
  list.printAllValues()