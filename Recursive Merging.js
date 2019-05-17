/*A little recursive method I created do combine 2 lists recursively.*/

function merge(list1, list2, rtnList){
  if(list1==[] && list2==[]){
     return(rtnList);
  }
  return(merge(list1,list2,rtnList));
}

var finalList=[];
var list1=[1,2,3];
var list2=[4,5,6];
console.log(merge(list1,list2,finalList));
