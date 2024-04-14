//Two ways to declare objects
//1. literals
//2.constructor
//constructor
Object.create
//declare symbol
const mysym=Symbol("key1");
// console.log(mysym);
// console.log(typeof(mysym));


//literals
const Jsuser={
    name:"balendra",
    [mysym]:"mykey1",
    age:24,
    location:"kanpur",
    email:"balendra@gmail.com",
    lastlogindays:["monday" ,"tuesday" ,"wednesday"]

};

// //access object 
console.log(Jsuser["name"]);
console.log(Jsuser["email"]);
console.log(typeof(Jsuser[mysym]));

//change in object
Jsuser.email="kasera@gmailcom";
console.log(Jsuser["email"])
// Object.freeze(Jsuser);
Jsuser.age=25;
console.log(Jsuser.age);

//function
Jsuser.funct=function(){
    console.log("Balendra you can");
}
console.log(Jsuser.funct());

Jsuser.funct1=function(){
    console.log(`Balendra you can , ${this.name}`);
}
console.log(Jsuser.funct1());


console.log(Jsuser)









