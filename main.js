var countDownDate = new Date("Jan 1, 2021 00:00:00").getTime();
var countDownfunction = setInterval(function() {
var now = new Date().getTime();
var distance = countDownDate - now;

// Time Calculations
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 *60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

// Output the Result
document.getElementById("demo").innerHTML = days + "d " + hours + "h " + minutes +"m " + seconds + "s ";

// If countdown is over => Write some Text
if (distance < 0){
    clearInterval(countDownDate);
    document.getElementById("demo").innerHTML = "EXPIRED";
}
},1000);