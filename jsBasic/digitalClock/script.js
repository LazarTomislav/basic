function showTime() {

    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let formatedHours = convertTimeAMPM(hours);

    hours = checkTime(hours);

    

    hours = addZero(hours);
    minutes = addZero(minutes);
    seconds = addZero(seconds);

    document.getElementById("clock").innerHTML = `${hours} : ${minutes} : ${seconds} : ${formatedHours}`

}

function convertTimeAMPM(time) {
    let format = "AM"
    if(time >= 12) {
        format = "PM"
    }
    return format;
}

function addZero(time) {
    if(time < 10) {
        time = "0" + time;
    }
    return time;
}

function checkTime(time) {
    if(time >= 12) {
        time -= 12;
    }
    return time;
}

showTime();
setInterval(showTime, 1000)
