function setMsg(msg, msgNum) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let para = document.createElement("p");
            para.className = `para${msgNum}`;
            para.innerText = `${msg}`;
            document.querySelector("div").append(para);
            setTimeout(() => {
                para.innerText = `${msg} .`;
                setTimeout(() => {
                    para.innerText = `${msg} . .`;
                    setTimeout(() => {
                        para.innerText = `${msg} . . .`;
                        resolve();
                    }, 500);
                }, 500);
            }, 500);
        }, 1000)
    });
}

(async function main() {
    await setMsg("Initializing Hacking", 1); 
    await setMsg("Reading Your Files", 2); 
    await setMsg("Password files detected", 3); 
    await setMsg("Sending all passwords and personal files to server", 4); 
    await setMsg("Cleaning up", 5);
})();