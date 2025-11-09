// async-await using IIFE : Immediately Invoked Function Expression.

function counter(num){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log(num);
            resolve("success");
        }, 1000);
    });
}

(async()=>{
    await counter(1);
    await counter(2);
    await counter(3);
    await counter(4);
    await counter(5);
})();   // using IIFE