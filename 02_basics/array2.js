const marvel_heros=["thor", "ironman" ,"spiderman"];
const dc_heros=["superman" , "flas" , "batman"];

let all_hero=marvel_heros.concat(dc_heros);
console.log(all_hero);

let all_heros=[...marvel_heros,...dc_heros];//prefer this
console.log(all_heros);

let anather_array=[1,2,3,[4,5,6],7,[,6,7,[6,7,8,]]];
let ans=anather_array.flat(Infinity);
console.log(ans);

//check array
console.log(Array.isArray("balendra"));
//convert to array
console.log(Array.from("balendra"));//split each word
console.log(Array.of("balendra"));//in array

