// 5. The Sum Selector: You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation.


let nums = [2, 5, 8, -3, 10];

function sumSelector(nums){
    let sum = 0;
    for (let num of nums){
        if (num < 0){
            return sum;
        }
        else{
            sum = sum + num;
        }
    }
    return sum;
}

console.log(sumSelector(nums));