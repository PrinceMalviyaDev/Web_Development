// 4. The Password Validator: You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit.


pw = "Srishti143";

function checkPassword(pw){
    let caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let smalls = "abcdefghijklmnopqrstuvwxyz";
    let nums = "0123456789"
    let small = false;
    let cap = false;
    let num = false;

    if(pw.length < 8){
        return false;
    }
    for(let i of pw){
        if(caps.includes(i)){
            cap = true;
        } else if (smalls.includes(i)){
            small = true;
        } else if (nums.includes(i)){
            num = true;
        } else {
            return false;
        }
    }
    if (cap && small && num){
        return true;
    }
}

if (checkPassword(pw)){
    console.log("The password is valid.")
}else{
    console.log("Invalid Password!");
}