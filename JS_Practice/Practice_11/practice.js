// Callback Hell:

// function counter(num, getNextNum){
//     setTimeout(()=>{
//         console.log(num);
//         if(getNextNum){
//             getNextNum();
//         }
//     }, 1000);
// }

// counter(1, ()=>{
//     counter(2, ()=>{
//         counter(3, ()=>{
//             counter(4, ()=>{
//                 counter(5);
//             });
//         });
//     });
// });


// Promises:

let prms = new Promise((resolve, reject)=>{
    console.log("I am a promise");
    resolve("success");
    // reject("some error occured");
});

console.log(prms);


// Promise real use simulation:

function counter(num){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log(num);
            resolve("success");
        }, 6000);
    });
}

let promise = counter(1);