                    
                    // Unary Operatr
 //  pre - Incarement

let a : number = 10 ;
let b : number= ++a ;
console.log(a);
console.log(b);

 // Post - Increment

let c :  number = 10 ;
let d : number = c++ ;
console.log(d);
console.log(c);

// Pre - Decrement

let x : number = 10 ;
let y : number = --x;
console.log(y);
console.log(x);

 // post - Decrement

let  num : number = 10;
let num1 : number = num--;
console.log(num1);
console.log(num); 

let num3 : number = 5;
let num4 : number = 4;
let num5 : number ;
 //   1+5=6   +   6-1=5  +  1+4=5    +  5    +   5 - 1=4
num5= ++num3  +  num3--  +  ++num4   + num3  +  num4--;   
     //   6   +   6      +   5       +  5    +   5           
     console.log(num5);     