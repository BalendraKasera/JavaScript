const d=new Date(); // create  date object 
console.log(d);

//methods
console.log(d.toString());
console.log(d.toLocaleDateString());//output date.
console.log(d.toLocaleString());//output date,time
console.log(d.toLocaleTimeString());//output 12/04/2024
console.log(d.toDateString()); //output--> day month date year
console.log(d.toJSON("12-04-2023")); 
console.log(d.toTimeString());

// 9 ways to create a new date object.
const d1=new Date();
console.log(d1);

const d2=new Date("April 12 , 2024  19:21:13");
console.log(d2);

const d3=new Date(2024,11,6,13,24,55,76756);
console.log(d3);

const d4=new Date(866000000);
console.log(d4);

let msec=Date.parse("March 21, 2012"); // .parse() method is used to convert date into milisc.
const dd=new Date(msec);
console.log(dd);




const date=Date.now();
console.log(date)

