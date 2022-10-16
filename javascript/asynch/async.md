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



