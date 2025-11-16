let nums = [3, 5, 7, 3, 6, 9];

async function mapArray(nums){
    let promises = [];
    for (let number of nums){
        let tempPromise = await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(number * 2);
            }, 500);
        });
        promises.push(tempPromise);
    }
    return promises;
}

let promisesArray = await mapArray(nums);

console.log(promisesArray);