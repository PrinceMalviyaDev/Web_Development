// 6. The Vowel Counter: You need to create a function that counts the number of vowels in a given string. Consider both uppercase and lowercase vowels.


let str = "jisdfsafioreotrtansvna";

function countVowels(str){
    let vowels = "aeiouAEIOU";
    let count = 0;
    for (let letter of str){
        if (vowels.includes(letter)){
            count++;
        }
    }
    return count;
}

console.log(countVowels(str));