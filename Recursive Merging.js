/*A little recursive method I created do combine 2 lists recursively.*/

function merge(list1, list2, rtnList){
  if(list1.length==0 && list2.length==0){//Both lists empty
     return(rtnList);
  }else if(list1.length!=0){//List 1 not empty
    rtnList.push(list1[0]);
    list1.shift();
  }else{//List 1 empty and list 2 not empty
    rtnList.push(list2[0]);
    list2.shift();
  }
  return(merge(list1,list2,rtnList));
}

var finalList=[];
var list1=[1,2,3];
var list2=[4,5,6];
console.log(merge(list1,list2,finalList));
