/*I decided to create 2 different methods to sort a string alphabeticly*/

//First way:
var wrd="cba";
var arr=wrd.split("");
var newArr=arr.sort();
var newWrd=(newArr.join(""));
console.log(newWrd);

//Second, 1 line master race, way:
console.log((("cba".split("")).sort()).join(""));
