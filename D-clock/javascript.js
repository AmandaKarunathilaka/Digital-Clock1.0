var yr = document.getElementById('yr');
var mon = document.getElementById('mon');
 day = document.getElementById('day');

let hrs = document.getElementById('hrs');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

let ampm = document.getElementById('ampm');

setInterval(() => {
    let currentTime = new Date();

    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();

    let amPm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12;

    hrs.innerHTML = hours < 10 ? "0" + hours : hours;
    min.innerHTML = minutes < 10 ? "0" + minutes : minutes;
    sec.innerHTML = seconds < 10 ? "0" + seconds : seconds;
    ampm.innerHTML = amPm;

}, 1000);
