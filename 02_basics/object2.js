const tinderuser={}

tinderuser.id="123abss"
tinderuser.name="balendra"
tinderuser.isloggedin=false

console.log(tinderuser);

//object inside object

const user1={
    fullname:{
        username:{
            firstname:"balendra",
            lastname:"kasera"
        }

    }
}
console.log(user1)
console.log(user1.fullname.username.firstname);

const obj1={ 1:"balendra" , 2:"kasera"}
const obj2={
3:"you" , 4:"can"
}

const obj3={
    ...obj1,...obj2
}
console.log(obj3);
//value from database in array

const obj4=[
    {
        id:'121',
    email1:"k@gmail.com"

    },
    {

    },
    {

    }
]
//all key ke liye
console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));

console.log(tinderuser.hasOwnProperty('islogg'));




