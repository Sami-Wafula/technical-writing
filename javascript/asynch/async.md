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



