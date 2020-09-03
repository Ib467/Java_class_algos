// test question from homedepot

function minChange(stg1, stg2) {
 
    if(stg1 === stg2){
        return 0;
    }
    for(var i=0; i<stg1.length; i++){
      var count = 0;
      for(var j=0; j<stg2.length; j++){
        if (stg1[i] === stg2[j]){
          count++;
        }
        console.log(count);
        return count;
      }
    }
    if(stg1 ==""){
      return stg2.length;
    }
    if(stg2 ==""){
      return stg1.length;
    }
    if(stg1 != stg2){
      return stg2.length;
    }
    return null;

}

console.log("result:", minChange("abc", "abc"), "expected:", 0);
console.log("result:", minChange("ac", "abc"), "expected:", 1);
console.log("result:", minChange("abc", "ac"), "expected:", 1);
console.log("result:", minChange("", "abc"), "expected:", 3);
console.log("result:", minChange("abc", ""), "expected:", 3);
console.log("result:", minChange("abc", "cde"), "expected:", 3);
console.log("result:", minChange("asdfasfaadsf", "cdelksadas"), "expected:", 9);