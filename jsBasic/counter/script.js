let counter = document.querySelector(".counter");
const addCount = document.querySelector("#addCountBtn");
const lowerCount = document.querySelector("#lowerCountBtn");

let count = 0;

addCount.addEventListener("click", incrementCount);
lowerCount.addEventListener("click", decrementCount);

function incrementCount(){
    count++;
    counter.innerHTML = count;
    if(count > "0"){
        counter.style.color = "green"
    } else if(count == "0"){
        counter.style.color = "white"
    }
    counter.animate([{opacity: "0.2"}],[])
}


function decrementCount(){
    count--;
    counter.innerHTML = count;
    if(count < "0") {
        counter.style.color = "red"
    }
}