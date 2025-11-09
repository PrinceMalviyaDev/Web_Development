function counter(num){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log(num);
            resolve("success");
            // reject("Some error occurred.")
        }, 1000);
    });
}


// Actual Promise Chain:

counter(1)
    .then((res)=>counter(2))
    .then((res)=>counter(3))
    .then((res)=>counter(4))
    .then((res)=>counter(5))
    .catch((err)=>console.log(err));