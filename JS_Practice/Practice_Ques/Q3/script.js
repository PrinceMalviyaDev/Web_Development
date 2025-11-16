// 3. The Mirror Mirror: Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself.

let str = "srishti";
let len = str.length;
let count = 0;
let revStr = "";

function mirrorString(str){
    for(let i = len-1 ; i >= 0; i--){
        revStr = revStr + str[i];
    }
    str = str + revStr;
    return str;
}


console.log(mirrorString(str)); // Expected Output: "srishtitihrsis"