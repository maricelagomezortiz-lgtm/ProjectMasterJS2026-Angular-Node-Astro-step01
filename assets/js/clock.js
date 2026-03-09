let clockTime = document.querySelector(".clock__time");

setInterval(() => {
    
    let myDate = new Date();
    let hours = myDate.getHours();
    let minutes = myDate.getMinutes();
    let seconds = myDate.getSeconds();

    if (hours<10) hours = "0" + hours;
    if (minutes<10) minutes = "0" + minutes;
    if (seconds<10) seconds = "0" + seconds;

    clockTime.innerHTML = `${hours}:${minutes}:${seconds}`;

}, 1000);
