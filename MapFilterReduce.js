
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
*/
//FILTER

