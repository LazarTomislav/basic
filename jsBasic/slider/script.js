const container = document.querySelector (".images");
const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");

let count = 0;

prevBtn.addEventListener("click", prevImg);
nextBtn.addEventListener("click", nextImg);

function nextImg() {
    container.animate([{opacity: "0.1"}, {opacity: "1.0"}], {duration: 1000, fill: "forwards"})

    if(count === 4) {
        count = -1;
    }
    
    count++;
    container.style.background = `url(img/bcg-${count}.jpg)`;
}

function prevImg() {
    container.animate([{opacity: "0.1"}, {opacity: "1.0"}], {duration: 1000, fill: "forwards"})

    if(count === -1) {
        count = 5;
    }
    
    count--;
    container.style.background = `url(img/bcg-${count}.jpg)`;
}

