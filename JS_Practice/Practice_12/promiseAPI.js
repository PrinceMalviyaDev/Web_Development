console.log('Hello, we are learning Promises');

let prom1 = new Promise((resolve, reject)=>{
    let r = Math.random();
    if(r < 0.5){
        reject("Some error occured! 1");
    }else{
        setTimeout(()=>{
            console.log('Data 1');
            resolve("Success 1");        
        }, 2000);
    }
});

let prom2 = new Promise((resolve, reject)=>{
    let r = Math.random();
    if(r < 0.5){
        reject("Some error occured! 2");
    }else{
        setTimeout(()=>{
            console.log('Data 2');
            resolve("Success 2");        
        }, 2000);
    }
});

// ====================================================================================

// Promise.all([list of Promise objects]);

let prom3 = Promise.all([prom1, prom2]);    

prom3.then((res)=>{     // .then() will only work when both the promises will be resolved.
    console.log(res);   // it will print "res" i.e., a list of resolved messages
}).catch((err)=>{
    console.log(err);   // will print errors
});

// =====================================================================================

// Promise.allSettled([list of Promise objects]);

// let prom4 = Promise.allSettled([prom1, prom2]);

// prom4.then((res) => {   // .then() will always print the status and the resolve/error message according to the settlement(resolved or rejected). It doesn't need the .catch() as it will never run.
//     console.log(res);
// });

// =====================================================================================

// Promise.race([list of Promise objects]); 

// let prom5 = Promise.race([prom1, prom2]);

// // either .then() will work or .catch() will work according to the "race winner Promise".
// prom5.then((res)=>{    // .then() will print the "res" of Promise that resolves first
//     console.log(res);
// }).catch((err)=>{     // .catch() will print the "err" of Promise that gets rejected first
//     console.log(err);
// });

// ======================================================================================

// let prom3 = Promise.resolve("success 1");
// let prom3 = Promise.reject("some error 1")
// let prom4 = Promise.resolve("success 2");
// let prom4 = Promise.reject("some error 2")

// let prom5 = Promise.any([prom3, prom4]);    // it will work for only the first promise that is recolved. It will throw aggregate error if all the promises are rejected.

// prom5.then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });