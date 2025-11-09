let input = document.querySelector("input");

let mirror = document.querySelector("div");

input.addEventListener("keyup", (e)=>{
    let content = input.value;
    mirror.innerHTML = content;
});

mirror.addEventListener("mouseleave", (e) => {
    mirror.style.backgroundColor = "black";
    mirror.style.color = "yellow";
});

mirror.addEventListener("mouseover", (e) => {
    mirror.style.backgroundColor = "red";
    mirror.style.color = "white";
});