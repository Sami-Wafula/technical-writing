//synchronous execution
// const fakeApi = () => {
//     console.log('Sync code');
// }

// console.log('Hello');
// fakeApi();
// console.log('The end')

//asynch code 

// const fakeApi = () => {
//     setTimeout(() => {
//         console.log('Sync code');
//     }, 1000);
// }

// console.log('Hello');
// fakeApi();
// console.log('The end')

//promise
  
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

