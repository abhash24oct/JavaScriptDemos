console.log("yes");

const API_KEY= "c075e3c2c88205801340f0c1fc30b6b5247085faca55efd39";

const finalUrl= `http://api.wordnik.com/v4/words.json/randomWord?api_key=${API_KEY}`;


fetch(finalUrl)
 .then(data => data.json())
 .then((res) => {
     document.querySelector("#word").innerHTML=res.word;
     let gifyUrl=`https://api.giphy.com/v1/gifs/search?api_key=6tiWJOGm2AnbSJ1MGmt5nlZ9vcJ4zKOa&q=${res.word}&limit=1&offset=0&rating=R&lang=en`;
     return fetch(gifyUrl);
    })
.then((data) => data.json())
.then((res)=>showGif(res.data[0].images.fixed_height_still.url))
.catch(err => console.error(err));


function showGif(gifUrl){
    
    let div= document.getElementById('gif');
    let img = document.createElement('img');
    img.setAttribute('src',gifUrl);
    div.appendChild(img);
}

//A promise is an object that may produce a single value some time in the future: either a resolved value, or a reason that it’s not resolved

let promiseToCleanRoom =new Promise((resolve,reject)=>{
    //clean the room 

    let roomCleaned=true;

    if(roomCleaned){
        resolve(' cleaned');
    }else{
        reject(' dirty');
    }
});

promiseToCleanRoom
    .then((resolve)=>console.log("The room is  "+resolve))
    .catch((fromReject)=> console.log("The room is "+fromReject));

//when we have a task which will be completed when the some set of promise is comleted , then we chain the promise


let promiseToThrowGarbage = new Promise((resolve,reject)=>{
    let garbageThrown=true;

    if(garbageThrown){
        resolve('Thrown');
    }
});

let promiseToGetTheIceCream = new Promise((resolve,reject)=> {
    setTimeout(resolve,2000);
})

//chanining

promiseToCleanRoom
    .then(()=> promiseToThrowGarbage)
    .then(()=> promiseToGetTheIceCream)
    .then ((message )=> console.log("Finished "+message))
    .catch(()=> console.log('Failed '));

//This can be done using promise.All(), which takes an array of promises and returns a promise when all the promise are resolve
// and fails if any one of them fails

Promise.all([promiseToCleanRoom,promiseToGetTheIceCream,promiseToThrowGarbage])
    .then((fromResolve) => console.log('Finished using all'+fromResolve) )
    .catch(fromReject => console.log('Failed using all '+fromReject));


//IF a promise can be resolved ,if any one of the promise is resloved we can use method    

Promise.race([promiseToCleanRoom,promiseToGetTheIceCream,promiseToThrowGarbage])
    .then((fromResolve) => console.log('Finished using race'+fromResolve) )
    .catch(fromReject => console.log('Failed using race '+fromReject));

//Actuall all methods waits for all the promise to be resolved, but the race doesnot waits, like 
// it will resolve if any one of them is resolved .
// Ex: When we are getting same set of response from 3 servers and we want to resolve if we get from any one them 
// the we use race    