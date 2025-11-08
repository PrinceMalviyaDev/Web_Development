let modeBtn = document.querySelector("#mode");

let currMode = "light";

modeBtn.addEventListener("click", ()=>{
    if(currMode == "light"){
        currMode = "dark";
        document.querySelector("body").classList.remove("light");
        document.querySelector("body").classList.add("dark");
    }else{
        currMode = "light";
        document.querySelector("body").classList.remove("dark");
        document.querySelector("body").classList.add("light");
    }

    console.log(currMode);
});