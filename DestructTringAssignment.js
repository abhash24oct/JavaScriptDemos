var newObj ={a:10,b:"Abahsh",c:"28"};

//Create a new variable using the propertires of the object newObj

var a = newObj.a;
var b = newObj.b;
var c = newObj.c;


//ES6 has new way for this using  ES6 destructuring syntax

const {a,b,c} = newObj; //a=10 b=abahsh c:28

const {a:x,b:y,c:z}=newObj;// x y and z re new vars having the values of a,b,c
