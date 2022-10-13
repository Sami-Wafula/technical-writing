Introduction

In JavaScript, functions are objects. Its therefore completely possible to assign functions to variables, create functions within other functions, return functions from other functions and we can also pass them as arguments to other functions (critically important in the callback concept)

- Functions as objects

- Storing functions in variables

Let's create a function sum which returns the sum of two numbers.

function sum(a, b){
    return a + b;
}

running;

console.log(sum(1, 2))

returns 

3

Assuming that we wanted to change the name of our function to 'add', without affecting its logic. We can go ahead and assign a variable 'add' to the function, as shown;

let add = sum

running;

console.log(add(1, 2))

returns

3

That confirms that calling a variable assigned to a function executes with similar logic as the function it's assigned to.