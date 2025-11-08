// 1) The Javascript events have the priority over the inline events, when both are defined, JS events will be executed not the inline events.

// 2) Same kind of event will be overidden everytime you redefine it in the JS code.

let btn1 = document.querySelector("#btn1");

btn1.onclick = ()=>{
    console.log("btn1 was clicked");
    let a = 25;
    a++;
    console.log(a);
};


let div = document.querySelector("div");
div.onmouseover = ()=>{
    console.log("you are inside the div.");
};


// 3) Event Object: 
// It is a special object that has details about the event.
// eg: e.target, e.type, e.clientX, e.clientY

btn1.onclick = (e) => {
    console.log(e);
    console.log(e.target);  //imp
    console.log(e.type);   //imp
}