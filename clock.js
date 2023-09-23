// get time and date 
function showTime(){
    let today = new Date;
let num = today.getDay();
console.log(num);
let daylist = ["sunday","monday","tuesday","wensday","thursday","friday","saturday"];
console.log("today is :"+daylist[num]);
let hour = today.getHours();
let minute = today.getMinutes();
let second = today.getSeconds();
let prepand = hour>=12?"pm":"am";
hour=hour>=12?hour-12:hour;
hour=hour<10?("0"+hour):hour;
minute=minute<10?("0"+minute):minute;
second=second<10?("0"+second):second;
let cuurentTime = " "+hour+":"+minute+":"+second+" "+prepand;
document.getElementById("clc").innerHTML = cuurentTime;
setInterval(showTime, 1000);
}
showTime();