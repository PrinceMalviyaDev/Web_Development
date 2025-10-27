

let arr = ["red", "blue", "yellow", "violet", "indigo","green", "orange", "black", "pink", "gray"];

let boxes = document.getElementsByClassName("box");

console.log(boxes);

for(let i = 0; i <10; i++){
    let a = Math.floor(Math.random() * 10);
    console.log(a);
    boxes[i].style.backgroundColor = arr[a];
}