
// let boxes = document.getElementsByClassName("box");  // Returns the html collection (not a list) of children elements.

let boxes = document.querySelector(".container").children;   // Returns the html collection (not a list) of children elements.


function getRandomColor(){
    // a + r * (b - a);  //returns the random value between a(min) and b(max)(a & b included), where r is random variable between 0 and 1.

    let val1 = Math.ceil(0 + Math.random() * 255);
    let val2 = Math.ceil(0 + Math.random() * 255);
    let val3 = Math.ceil(0 + Math.random() * 255);

    return `rgb(${val1}, ${val2}, ${val3})`;   //return random rgb() color.
}

Array.from(boxes).forEach(e => {
    e.style.backgroundColor = getRandomColor();
    e.style.color = getRandomColor();
})