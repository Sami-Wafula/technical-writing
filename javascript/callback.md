Introduction

In JavaScript, functions are objects. Its therefore completely possible to assign functions to variables, create functions within other functions and we can also pass them as arguments to other functions (critically important in the callback concept)

- Functions as objects

- Storing functions in variables

Let's create a function sum which returns the sum of two numbers.
```
function sum(a, b){
    return a + b;
}
```
running;
```
console.log(sum(1, 2))
```
returns 
```
3
```
Assuming that we wanted to change the name of our function to 'add', without affecting its logic. We can go ahead and assign a variable 'add' to the function, as shown;
```
let add = sum
```
running;
```
console.log(add(1, 2))
```
returns
```
3
```
That confirms that calling a variable assigned to a function executes with similar logic as the function it's assigned to.

- creating functions within other functions

Let's define a function floatInt which takes a  float as an argument and converts it to an integer
```
function floatInt (a){
    let int = parseInt(a);
    return int;
}
```
running;
```
console.log(floatInt(23.67))
```
returns 
```
23
```
We now define another function mul which returns the product of two numbers
```
function mul(a, b){
    let res = a * b;
    return res;
}
```
running; 
```
console.log(mul(2.0, 2.9))
```
returns
```
5.8
```
Now let'combine the two functions in such a manner that function mul runs first then floatInt is executed thereafter.
To achieve that, we define function floatInt inside function mul. Our modified function mul will now look like this;
```
function mul(a, b){

    function floatInt (a){
        let int = parseInt(a);
        return int;
    }

    let res = a * b;
    return floatInt(res);
}
```
note:
- the nested function has not been altered
- the output of the parent function is fed as an argument to the child function

running;
```
console.log(mul(2.0, 2.9))
```
outputs
```
5
```
- passing them as arguments to other functions

Javascript functions passed as arguments to other functions are called callback functions. A good example is the eventListener function which has a function parameter that executes after an event is captured. To explore how an eventListener works, view the code below;
```
addEventListener("click", function(){
document.write("I got clicked!")
});
```
Here, the function addEventListener has two parameters
the "click" parameter detects a mouse click event
the anonymous function which returns the text "I got clicked!"

The program execution starts with a click event which then triggers the output
To run the code, we need a html boilerplate and use the <script></script> tags for our JavaScript function;
```
<!DOCTYPE html>
<html>
<body>
<h2>JS Event Listener</h2>
<h3>This is a demonstration for callback functions in JavaScript</h3>
<h4>Execution sequence</h4>
<li>user clicks the button</li>
<li>click event is captured by the event Listener</li>
<li>callback function runs</li>
<li>output is displayed</li>
<button id="btn">Click A!</button>
<script>
    addEventListener("click", function(){
    document.write("I got clicked!")
    });
</script>
</body>
</html>
```
Executing the code in a browser prints the message "I got clicked!" in the browser window.