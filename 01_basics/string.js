//*********String method */

let userName="balendra kasera ";
let result=userName.match("en");//return array.
console.log(result);

let text="balendra you can you will";
let ans=text.repeat(6);//return in times
console.log(ans);

let user="balendra kasera";
let answer=user.replaceAll("balendra" , "Balendra");
console.log(answer);

let user1="balendra kasera";
let answer1=user.search("Len");//return position of 1st match
console.log(answer1);

let txt="balendra";
let final=txt.slice(-9);//return a portiom
console.log(final);

let userr1="balendra you can do it";
let ans1=userr1.split("");//return in aaray 
console.log(ans1);

let person="balendra kasera ";
let re=person.substring(2,4);
console.log(re);

let s1="       kasera          ";
let ss=s1.trim();
console.log(ss);
