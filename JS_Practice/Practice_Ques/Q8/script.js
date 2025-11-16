// 8. Async Array Mapping: Write an asynchronous function that takes an array of numbers and returns a new array of Promises where each number is multiplied by 2 after a delay of 500 milliseconds.

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

// let nums = [3, 5, 7, 3, 6, 9];

// async function mapArray(nums) {
//     let promises = nums.map(num => {
//         return new Promise(res => {
//             setTimeout(() => {
//                 res(num * 2);
//             }, 500);
//         });
//     });

//     return promises; // array of promises
// }

// let promisesArray = await Promise.all(await mapArray(nums));

// console.log(promisesArray);