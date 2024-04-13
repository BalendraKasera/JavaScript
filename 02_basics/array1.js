//array
const arr=[1,2,3,4];
console.log(arr);

//arrays methods

const myarr=new Array(1,2,3,5,5);
console.log(myarr);
console.log(myarr[2]);

myarr.push(9)
myarr.push(11);
console.log(myarr);

let mna=new Array(2,4,5,6,7,8);
console.log(mna);
mna.push(10);
mna.push(11);
console.log(mna);
mna.pop();
// console.log(mna);
mna.unshift(7);
mna.unshift(1);
console.log(mna);
mna.shift();
console.log(mna);
mna.shift();

mna.shift();
mna.shift();
console.log(mna);

let Arr=new Array(2,3,11,"balendra");
let MynArr= Arr.join();
console.log(typeof(Arr));//object

console.log(MynArr);//string

//slice and splice

let Mna=new Array(7,8,9,10,11,12 ,13);
console.log("A" , Mna);
let MnaNew=Mna.slice(2,4);
console.log(MnaNew);
console.log("B" , Mna);

let MnaNew2=Mna.splice(1,5);
console.log(MnaNew2);
console.log("C" , Mna);











