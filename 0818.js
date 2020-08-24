// BINARY SEARCH TREE

class BSTNode{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}
class BST{
    constructor(){
        this.root = null;
    }


// MON

/* 
    CHECK TO SEE IF BST IS EMPTY
*/
isEmpty(){
    if(this.root==null)
        return true;
    return false;

}
/* 
    RETURN THE MINIMUM VALUE STORED IN THE BST
*/
min(){
    var runner=this.root;
    while(runner.left!=null)
    {
        runner=runner.left;
    }
    return runner.value;

}
/* 
    1. BASE CASE
    2. FORWARD PROGRESS
    3. RECURISVE CALL
*/
//recursive min
rMin(runner=this.root){
    if(runner.left==null){
        return runner.value;
    }
    return this.rMin(runner.left);
}
/* 
    RETURN THE MAXIMUM VALUE STORED IN THE BST
*/
max(){
    let runner=this.root;
    while(runner.right!=null){
        runner=runner.right;
    }
    return runner.value;
}

//recursive max
rMax(runner=this.root){
    if(runner.right==null){
        return runner.value;
    }
    return this.rMax(runner.right);
}

insert(value){
    runner=this.root;
    let newNode= new BSTNode(value);
    while(runner!=null){
        if(runner.value>value){
            if(runner.left==null){
                runner.left=newNode;
                return;
            }
            else runner=runner.left;
        }
        else {
            if(runner.right==null){
                runner.right=newNode;
                return;
            }
            else runner=runner.right;
        }
    }
}

rInsert(value, runner=this.root){
    if(runner.value>value&&runner.left==null){
        runner.left=new BSTNode(value);
        return;
    }
    else if(runner.value<value&&runner.right==null){
        runner.right=new BSTNode(value);
        return;
    }
    if(runner.value>value)return this.rInsert(value, runner=runner.left);
    else return this.rInsert(value, runner=runner.right);
}

contains(value){
    runner=this.root;
    while(runner!=null){
        if(runner.value==value)return true;
        else if(runner.value>value)runner=runner.left;
        else runner=runner.right;
    }
    return false;
}

rContains(value, runner=this.root){
    if(runner.value==value)return true;
    else if(runner==null)return false;
    if(runner.value>value) return this.rContains(value, runner=runner.left)
    else return this.rContains(value, runner=runner.right)
}

range(){
    return this.max()-this.min();
}

rRange(){
    return this.rMax()-this.rMin();
}

height(runner=this.root, count){
  if(runner==null) return count;
  count++;
  var leftlink = height(runner.left, count)
  var rightlink = height(runner.left, count)
    if(leftlink>rightlink) return leftlink;
    else return rightlink;

    }
    
}



// WED
// insert(value)


// -----------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------//

// THUR
// height()

// -----------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------//

// FRI
// isBalanced()

// -----------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------//
isBalanced(runner=this.head){
    //IF TREE IS EMPTY RETURN TRUE
    if(runner==null)return true;
    //GET THE HEIGHT OF BOTH SIDES OF THE CURRENT NODE
    var lHeight=this.height(runner.left);
    var rHeight=this.height(runner.right);
    //BIG BOY IF CHECK
    if(
        //IS THE DIFFERENCE IN HEIGHT BETWEEN THE SIDES OF THE NODE LESS THAN 2?
        Math.abs(lHeight-rHeight)<2&&
        //IS THE LEFT SIDE BALANCED?
        this.isBalanced(runner.left)&&
        //IS THE RIGHT SIDE BALANCED?
        this.isBalanced(runner.right)
        //IF ALL THAT IS TRUE, THEN TREE IS BALANCED
        )return true;
    //IF WE GET HERE, IT WASNT BALANCED...DARN
    return false;
}
}