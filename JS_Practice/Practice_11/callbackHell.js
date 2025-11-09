// function getData(dataId, getNextData){
//     setTimeout(() => {
//         console.log("data", dataId);
//         if(getNextData){
//             getNextData();
//         }
//     }, 2000);
// }

// getData(1, () => {
//     getData(2);
// });


function counter(num, getNextCount){
    setTimeout(() => {
        console.log(num);
        if(getNextCount){
            getNextCount();
        }
    }, 1000);
}


// Callback Hell:
// Pyramid Structure (Pyramid of Doom):
// Bad Code:

counter(1, ()=>{
    console.log("Next is 2");
    counter(2, ()=>{
        console.log("Next is 3");
        counter(3, ()=>{
            console.log("Next is 4");
            counter(4, ()=>{
                console.log("Next is 5");
                counter(5);
            });
        });
    });
});