const URL = "https://dog.ceo/api/breeds/image/random"

const getImg = async() => {
    console.log("getting data....");
    let response = await fetch(URL);  // it returns an Response object.
    console.log(response);  // JSON Format
    
    let data = await response.json(); // converts the JSON data into JS object format(Readable).

    console.log(data);
    document.getElementsByTagName("img")[0].src = data.message;
}

// function getImg(){
//     fetch(URL)
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data);
//         document.getElementsByTagName("img")[0].src = data.message;
//     });
// }

let button = document.querySelector("#btn");
button.addEventListener("click", getFacts);