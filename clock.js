let date;
let hour;
let minute;
let second;

const amTOPm = document.getElementById("am-pm");
const hrValue = document.getElementById("hr-num");
const minValue = document.getElementById("min-num");
const secValue = document.getElementById("sec-num");
let hour12;

// clock functions 
function timeFormat() {
    if (hour > 12 && hour !== 24) {
        hour12 = hour - 12;
        amTOPm.innerHTML = "p.m.";
        hrValue.innerHTML = hour12;
    } else if (hour === 24) {
        hour12 = hour - 24;
        amTOPm.innerHTML = "a.m.";
        hrValue.innerHTML = hour12;
    } else if (hour === 11) {
        amTOPm.innerHTML = "a.m.";
        hrValue.innerHTML = hour;
    } else if (hour === 12) {
        amTOPm.innerHTML = "p.m.";
        hrValue.innerHTML = hour;
    } else {
        amTOPm.innerHTML = "a.m.";
        hrValue.innerHTML = "0" + hour;
    }
}
function minFormat() {
    if (minute < 10) {
        minValue.innerHTML = "0" + minute;
    } else {
        minValue.innerHTML = minute;
    }
}
function secFormat() {
    if (second < 10) {
        secValue.innerHTML = "0" + second;
    } else {
        secValue.innerHTML = second;
    }
}


// last clock count 
setInterval(function () {
    date = new Date();
    hour = date.getHours();
    minute = date.getMinutes();
    second = date.getSeconds();

    timeFormat();
    minFormat();
    secFormat();

    // console.log(date);
    // console.log(hour);
    // console.log(minute);
    // console.log(second);
}, 1000)