function api(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("weather data");
            resolve(200);
        }, 2000);
    });
}

async function getWeatherData(){
    await api();  // first call
    await api();  // second call
}

// getWeatherData();


// Escaping  promise chaining using async-await

function counter(num){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log(num);
            resolve("success");
        }, 1000);
    });
}

async function runCounter(){
    await counter(1);
    console.log("next is 2")
    await counter(2);
    console.log("next is 3")
    await counter(3);
    console.log("next is 4")
    await counter(4);
    console.log("next is 5")
    await counter(5);
}

// runCounter();