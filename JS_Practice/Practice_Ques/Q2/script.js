// 2. The Double Trouble: You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.

let nums = [2, 2, 5, 7, 7, 7, 10, 3, 3, 8, 9, 9, 4];

let prev;

for (let i = 0; i < nums.length; i++){
    let current = nums[i];

    if (current != prev){
        nums[i] = current * 2;
    }
    prev = current;
}

console.log(nums);