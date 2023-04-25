function countDown() {
var date = new Date("Aprail 22, 2023 12:00:00 GMT+05:");
var control = new Date().getTime();
var time = date - control;
var days = Math.floor (time / (1000* 60 *60 * 24));
var dayDay = days+"<br> Days";
var hours = Math.floor((time% (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var hoursHoure = hours + " <br>Hourse";
var minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
var minuMinu =minutes + "<br> Minutes";
var seconds = Math.floor((time % (1000 * 60)) / 1000);
var secSec = seconds + "<br> Seconds"

// document.write("coundown 2023 Countdown: " + days + " Days, " + hours + " Hours "+minutes + " Minutes, "+ seconds + "Seconds")

day = document.querySelector("#day").innerHTML=dayDay;
hours = document.querySelector("#hourse"). innerHTML =hoursHoure;
minu = document.querySelector("#minu"). innerHTML =minuMinu;
sec = document.querySelector("#sec"). innerHTML =secSec;
}
countDown();
setInterval(countDown,1000);