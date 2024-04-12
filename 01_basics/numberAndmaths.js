const number=500;
console.log(number);


const num=new Number(600);
console.log(num.toString());

const num1=new  Number(100000000);
console.log(num1.toLocaleString('en-IN'));

const n1=102.673486483;
console.log(n1.toFixed(3));

const n5=123.45;

console.log(n5.toPrecision(1));
console.log(n5.toPrecision(2));
console.log(n5.toPrecision(3));
console.log(n5.toPrecision(4));
console.log(n5.toPrecision(5));

// ***************maths***********
console.log(Math);
console.log(Math.ceil(4.1));
console.log(Math.floor(4.9));

 console.log(Math.random())  //btw 0 and 1
 console.log((Math.random()*10)+1); //when we multiply with 10 it will become 0 so that +1.

 const min=10;
 const max=20;
 console.log(Math.floor(Math.random()*(max-min+1))+min);//this line is important.
 
 


