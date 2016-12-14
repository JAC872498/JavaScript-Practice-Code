/*This takes a end date and calculates how many days remaining until that day(including that day and today)*/

var endYear=prompt("Enter the end year.");
var endMonth=prompt("Enter the end month(in number form).");
var endDay=prompt("Enther the end day.");
if(prompt("Do you want to use today as a starting date?").toUpperCase()=="YES"){
  var year=new Date().getYear()+1900;
  var month=new Date().getMonth()+1;
  var day=new Date().getDate();
}else{
  var year=prompt("Enter the starting year.");
  var month=prompt("Enter the starting month(in number from).");
  var date=prompt("Enter the starting day.");
}
var tot=1;
trueLoop: while(true){
  if(month==1||month==3||month==5||month==7||month==8||month==10||month==12){
    while(day<31){
      day++;
      tot++;
      if(year==endYear && month==endMonth && day==endDay){
        break trueLoop;
      }
    }
  }else if(month==4||month==6||month==9||month==11){
    while(day<30){
      day++;
      tot++;
      if(year==endYear && month==endMonth && day==endDay){
        break trueLoop;
      }
    }
  }else{
    if(year%400==0 ||(year%4==0 && year%100!=0)){
      while(day<29){
        day++;
        tot++;
        if(year==endYear && month==endMonth && day==endDay){
          break trueLoop;
        }
      }
    }else{
      while(day<28){
        day++;
        tot++;
        if(year==endYear && month==endMonth && day==endDay){
          break trueLoop;
        }
      }
    }
  }
  day=0;
  month++;
  if(month==13){
    month=1;
    year++;
  }
}
if(endYear<year||(endYear<=year &&  endMonth<month)||(endYear<=year && endMonth<=month && endDay<day)){
   console.log("That day is either in the past or is today.");
}else{
   console.log("There are "+tot+" days left until "+endDay+"/"+endMonth+"/"+endYear);
}
