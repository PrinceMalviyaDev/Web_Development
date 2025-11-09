// let promise = new Promise((resolve, reject) => {
//     console.log("I am a Promise.");   //pending
//     resolve("success");               //resolved
//     // reject("some error occured")   //rejected
// });

// console.log(promise);


function getData(dataId, getNextData){
    return new Promise((resolve, reject) => {   //immediately returning promise before resolving (pending state)
        setTimeout(()=>{
            console.log("data", dataId);
            resolve("success");   // resolved state
            if(getNextData){
                getNextData();
            }
        }, 6000);        
    });
}

// getData(1);