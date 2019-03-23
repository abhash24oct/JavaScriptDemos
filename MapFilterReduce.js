
//MAP

const arr = [1,3,4,5];

const myArrayTwoTimes=arr.map(function(value,index,arr){
    return value*2;
})

console.log(myArrayTwoTimes); //Array(4) [ 2, 6, 8, 10 ]

const songs =[
    {id:1,name:"curl of the Burl",artist:"Mastodon"},
    {id:2,name:"oblivion",artist:"Mastodon"},
    {id:3,name:"Flying whales",artist:"Gojira"},
    {id:4,name:"L Sauvage",artist:"Gojira"}
  ]
  
  var allSongNames= songs.map(value => value.name);
  
  console.log(allSongNames); //Array(4) [ "curl of the Burl", "oblivion", "Flying whales", "L Sauvage" ]

  var allUpperSongs =songs.map(value => value.name.toUpperCase());


console.log(allUpperSongs);//Array(4) [ "CURL OF THE BURL", "OBLIVION", "FLYING WHALES", "L SAUVAGE" ]


/*
The Object.assign() method is used to copy the values of all enumerable own properties 
from one or more source objects to a target object. It will return the target object.

Properties in the target object will be overwritten by properties in the sources if they have the same key

*/

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);// Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget);// Object { a: 1, b: 4, c: 5 }

var o1 = { a: 1 };
var o2 = { b: 2 };
var o3 = { c: 3 };

var obj = Object.assign(o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }

//FILTER
/*
Filter receives the same arguments as map, and works very similarly. 
The only difference is that the callback needs to return either true or false. 
If it returns true then the array keeps that element and if it returns false the element is filtered out.
*/

const numbers = [1,2,3,4,5,6,7,8];

const myEvenArray = numbers.filter(value => value%2===0);

console.log(myEvenArray); //Array(4) [ 2, 4, 6, 8 ]

let strings= ["hello","Mat","Matson","cat","Dog"];

let filtered = strings.filter(value => value.includes("at"));

console.log(filtered); //Array(3) [ "Mat", "Matson", "cat" ]

//Reduce
/*It is similar to both map and filter but, it differs in the callback arguments.
 The callback now receives the accumulator (it accumulates all the return values. 
Its value is the accumulation of the previous returned accumulations),
 the current value, the current index and finally the whole array.

 The first atttribute is a callback function and the other one is the intial value of accumltor

,*/


const sum = numbers.reduce((accumlator,currValue,currIndex,arr) => {
    return accumlator+currValue;                          
 },0)
 
 console.log(sum);

 const artistCount = songs.reduce((acc,val)=>{
    let artistName =val.artist;
    let songCount= acc[artistName] ? acc[artistName]+1 : 1 ;
    
    var obj =  {};
    obj[artistName]=songCount;
    return Object.assign(acc,obj);
  },{})
  
  
  console.log(artistCount); //Object { Mastodon: 2, Gojira: 2 }
  