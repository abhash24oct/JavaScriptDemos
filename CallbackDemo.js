/**
1)Using callback we can send a function to antoher function and execute it 
inside the function,
2)Callback is also called higher order function
3) We can use call back to execute a function in certain seq

**/


function performOperation(num1,num2,callback){
  return callback(num1,num2);
}


console.log(performOperation(3,4,(a,b)=> a+b));

console.log(performOperation(3,4,(a,b)=> a*b));
