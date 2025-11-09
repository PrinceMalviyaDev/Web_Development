function asyncFunc1() {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("data1");
            resolve("success");
        }, 4000);
    });
}

function asyncFunc2() {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("data2");
            resolve("success");
        }, 4000);
    });
}

// Promise Chaining: (not actual)

// console.log("fetching data1...");
// let p1 = asyncFunc1();
// p1.then((res)=>{
//     let p2 = asyncFunc2();
//     console.log("fetching data2...");
//     p2.then((res)=>{});
// });

console.log("fetching data1...");
asyncFunc1().then((res)=>{
    console.log("fetching data2...");
    asyncFunc2().then((res)=>{});
});

// Below case will cause both the promises to resolve at almost the same time (no dependency).

// console.log("fetching data1");
// let p1 = asyncFunc1();
// p1.then((res) => {
//     console.log(res);
// });

// console.log("fetching data2");
// let p2 = asyncFunc2();
// p2.then((res) => {
//     console.log(res);
// });