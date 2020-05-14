const sendBtn = document.querySelector("#sendBtn");
const messageIn = document.querySelector("#messageIn");
const messageOut = document.querySelector("#messageOut");

sendBtn.addEventListener("click", sendMsg);


function sendMsg() {
    let entry = messageIn.value; 
    if(entry === "") {
        alert("Please Input Valid Value")
    } else {
        messageOut.innerHTML = entry;
        messageIn.value = "";
    }
}