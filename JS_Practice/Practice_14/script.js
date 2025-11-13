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


// function counter(num){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log(num);
//             resolve("success");
//         }, 1000);
//     });
// }

// counter(1)
//     .then((res)=>counter(2))
//     .then((res)=>counter(3))
//     .then((res)=>counter(4))
//     .then((res)=>counter(5))
//     .catch((err)=>{
//         console.log(err);
//     });

function counter(num){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log(num);
            resolve("Success");
        }, 1000);
    });
}

(async function callCounter(){
    await counter(1);
    await counter(2);
    await counter(3);
    await counter(4);
    await counter(5);
})();