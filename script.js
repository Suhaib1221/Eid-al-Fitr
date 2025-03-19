const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;
const year = day * 365;


function counter() {
    let eid = new Date("31 March 2025"); // Eid date

let now = new Date(); // Current date and time
let inMilli = eid - now; // Difference in milliseconds

// Calculate remaining days, hours, minutes, and seconds
let remainDays = Math.floor(inMilli / day); // Full days remaining
let remainHours = Math.floor((inMilli % day) / hour); // Full hours remaining after days
let remainMinute = Math.floor((inMilli % hour) / minute); // Full minutes remaining after hours
let remainSec = Math.floor((inMilli % minute) / second); // Full seconds remaining after minutes


document.getElementById("days").innerHTML = remainDays;
document.getElementById("hours").innerHTML = remainHours;
document.getElementById("minutes").innerHTML = remainMinute;
document.getElementById("seconds").innerHTML = remainSec;
}

setInterval( counter , "1000" )
// counter ();
