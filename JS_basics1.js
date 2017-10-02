//#1
var x = [];
x.push('coding', 'dojo', 'rocks');
x.pop();
console.log(x)
//final value of x = ['coding', 'dojo']

//#3
var z = [9, 10, 6, 5, -1, 20, 13, 2];
console.log(z);


var z = [9, 10, 6, 5, -1, 20, 13, 2];
newarr = [];
for(var i = 0; i < z.length - 1; i++){
  newarr.push(z[i]);
  if(z[i] == z[z.length - 1]){
    continue;
  }
}
console.log(newarr);

//#4
names = ['Kadie', 'Joe', 'Fritz', 'Pierre', 'Alphonso'];
console.log(names.length)

var five = [];
for(var i = 0; i < names.length; i++){
  if(names[i].length >= 5){
    five.push(names[i]);
  }
}
console.log(five);

//#5
function yell(str){
  var yellstr = str.toUpperCase() + "!!!";
  return yellstr;
}
console.log(yell('hello'));
