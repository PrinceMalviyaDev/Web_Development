let btn1 = document.querySelector("#btn1");

btn1.addEventListener("click", (e) => {
    console.log(e.type);
    console.log("button 1 was clicked - handler 1");
});

btn1.addEventListener("click", (e) => {
    console.log("button 1 was clicked - handler 2");
});

const handler3 = (e)=>{console.log("button 1 was clicked - handler 3")};

btn1.addEventListener("click", handler3);

btn1.addEventListener("click", (e) => {
    console.log("button 1 was clicked - handler 4");
});

btn1.removeEventListener("click", handler3);