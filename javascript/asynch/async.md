##Synchronous and Asynchronous programming in JavaScript

#Introduction

By default, JavaScript is synchronous. This means that a script is run in a sequence, starting from the top. 

Consider the following code;

``` JavaScript
const fakeApi = () => {
    console.log('Sync code');
}

console.log('Hello');
fakeApi();
console.log('The end')
```
executing the code returns

```
Hello
Sync code
The end
```
That's correct order in which the code is called, that is;
```JavaScript
console.log('Hello'); //returns Hello
fakeApi(); //returns Sync code
console.log('The end') //returns The end
```
That represents synchronous code execution. 

Asynchronous programming techniques enable programs to execute a potentially long running task(s) and at the same time be responsive to other events while the other task runs.

Let's now modify our initial piece of code;

```JavaScript
const fakeApi = () => {
    setTimeout(() => {
        console.log('Async code');
    }, 1000);
}

console.log('Hello');
fakeApi();
console.log('The end')
```
We have added the setTimeout function to simulate a delay, to reproduce the behaviour of an API call.

executing the above code returns;
```
Hello
The end
Async code
```
This shows that the output of 
```
fakeApi()
```
is logged last. Note that the last call 
```
console.log('The End')
```
is returned before the second call this represents asnychronous behaviour.

#Promises

A promise is an object that represents the current state of an operation of an asynchronous function. A promise is returned to the caller when the operation is running, and provide ways of handling the outcome of the operation.  

A promise has three states, 
- a pending state, where the operation is yet to be fulfilled.
- a fulfilled state, where asynchronous operations are complete and a value has been returned.
- a rejected state, where asynchronous operations have failed.

#Syntax for promises
Promise objects are created using the 
```JavaScript
Promise()
```
constructor. 
Here is the general syntax for a promise;
```JavaScript
let promise = my Promise(function(resolve, reject) => {
    //asynchronous call
    ... //pending state
    //return outcome
    if (success) {
        resolve(value); //fulfilled state
    } else {
        reject(error); //rejected state
    }
});
```
we have;
- the executor function performing the asynchronous operation
- two functions (passed as arguments to the executor function) 

Let's see a basic example of a promise
```JavaScript
let myPromise = new Promise(function(myResolve, myReject) {
    let x = 0;
  
    if (x == 0) {
      myResolve("OK");
    } else {
      myReject("Error");
    }
  });
  
  myPromise.then(
    function(value) {console.log(value);},
    function(error) {console.log(error);}
  );
```
In our example;
- the executor function evaluates if a given variable is equal to 0.
- myResolve function holds the response value for a fulfilled promise
- myReject function holds the response for a rejected promise

Executing the code results in the output
```
OK
```
since
```
0 == 0 
```
evaluates to true, the response from myResolve function is displayed since the promise is fulfilled. 


