function show(){
    if(document.querySelector("input").type == "password"){
        let content = document.querySelector("input").value;
        document.querySelector("input").type = "text";
        document.querySelector("input").value = content;
        document.querySelector("label").innerHTML = "Hide Password";
    }else{
        let content = document.querySelector("input").value;
        console.log(content);
        document.querySelector("input").type = "password";
        document.querySelector("input").value = content;
        document.querySelector("label").innerHTML = "Show Password";
    }   
};