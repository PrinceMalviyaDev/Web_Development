let btn = document.querySelector("#btn");

btn.addEventListener("click", ()=>{
    // alert("i was Clicked");
});

btn.addEventListener("click", ()=>{
    document.querySelector(".box").innerHTML = "The content is changed.";
});

btn.addEventListener("dblclick", ()=>{
    document.querySelector(".box").innerHTML = "You double clicked.";
});

btn.addEventListener("contextmenu", ()=>{
    alert("Dont Hack us by right click!");
});


document.addEventListener("keydown", (e)=>{
    console.log(e.key);
});