//synchronous execution
// const fakeApi = () => {
//     console.log('Sync code');
// }

// console.log('Hello');
// fakeApi();
// console.log('The end')

//asynch code 

const fakeApi = () => {
    setTimeout(() => {
        console.log('Sync code');
    }, 1000);
}

console.log('Hello');
fakeApi();
console.log('The end')
