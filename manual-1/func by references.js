function multiplier(){ 
 var product = 1; 
 for (var x=0; x < arguments.length; x++){ 
 product = product * arguments[x]; 
 } 
 return product; 
} 
console.log(multiplier(10,30));//Prints 300 to the console 
console.log(multiplier(10,30,10));//Prints 3000 to the console

console.log(multiplier(46,22));//Prints 300 to the console 
console.log(multiplier(10,36,10));//Prints 3000 to the console