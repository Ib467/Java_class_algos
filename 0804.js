//singly linked li

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
    var tempVar = this.head
    this.head = this.head.next
    tempVar = null
  };

  pop(){
    var runner = this.head
    while(runner.next.next != null){
      runner = runner.next
    }
    runner.next=null;
  }

  contains(val){
    var runner=this.head;
    while(runner.next !=null){
      if(runner.value==val){return true}
      runner=runner.next
    }
    if(runner.value==val){return true}
    return false
  }

  remove(val){
    var runner=this.head;
    var before;
    if(runner.value==val){this.head=runner.next}
    else{
      while(runner.next !=null){
        if(runner.value==val){before.next=runner.next;}
        before = runner;
        runner=runner.next
      }
      if(runner.value==val){before.next=null}
    }
  }
  // CREATING A NEW LIST
  partitionNew(num){
    var newList = new SLL();
    var runner=this.head  
    while(runner.next!=null){
      if(runner.value<num){
        newList.push(runner.value)
      }
      runner=runner.next
    }
    if(runner.value<num){
      newList.push(runner.value)
    }
    runner = this.head;
    while(runner.next!=null){
      if(runner.value>num){
        newList.push(runner.value)
      }
      runner=runner.next
    }
    if(runner.value>num){
      newList.push(runner.value)
    }
    this.head = newList.head;
  }
  // REARRANGING LIST
  partition(num){
    var runner=this.head; 
    while(runner.next!=null){
      if(runner.value<num){
        var temp=runner.value;
        runner=runner.next;
        this.remove(temp);
        this.insertAtFront(temp);
      } 
    }
  }

  // reverse and create a new SLL();
    reverseNew(){
    var newList=new SLL();
    var runner=this.head;
    while(runner.next!=null){
      newList.insertAtFront(runner.value);
      runner=runner.next;
    }
    newList.insertAtFront(runner.value);
    return newList;
  }



  reverese(){
    var runner=this.head.next;
    var before=this.head;
    before.next=null;
    while(runner.next!=null){
      var temp=runner.next;
      runner.next=before;
      before=runner;
      runner=temp;
  }
  runner.next=before;
  this.head=runner;
  }
};



var list = new SLL();
list.push(1)
list.push(2)
list.push(3)
list.push(4)

list.insertAtFront(6)
list.printAllValues()
console.log("-----------------------------------")

var list = new SLL();
list.push(41)
list.push(5)
list.push(23)
list.push(54)
list.push(2)
list.push(13)
list.push(1)
// list.push(31)
// list.push(42)
// list.push(3)
// list.push(51)
// list.push(42)
// list.push(63)


list.insertAtFront(6)
list.printAllValues()
console.log("-----------------------------------")
list.removeAtFront()
list.printAllValues()
console.log("-----------------------------------")
list.pop();
list.printAllValues();

console.log("-----------------------------------")
console.log(list.contains(3))//should return true
console.log(list.contains(4))//should return false
console.log("-----------------------------------")
list.remove(2);
list.printAllValues();
console.log("-----------------------------------")
list.partitionNew(20);
list.printAllValues();

console.log("_________________________________");
list.reverese();
list.printAllValues();