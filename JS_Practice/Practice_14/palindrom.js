function isPalindrom(str){
    let left = 0;
    let right = str.length - 1;

    while(left < right){
        if (str[left] !== str[right]){
            return false;
        }
    }
    return true;
}

console.log(isPalindrom("madam") ? "True" : "False");