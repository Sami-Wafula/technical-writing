//synchronous execution
const fakeApi = () => {
    console.log('Sync code');
}

console.log('Hello');
fakeApi();
console.log('The end')