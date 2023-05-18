
// variables

let alarmListArr = [];
const selectMenu = document.querySelectorAll("select");
const setAlarmBtn = document.querySelector("#btn-setAlarm");
let alarmCount = 0;
let alarmTime;
let ring = new Audio("audio/Alarm-ringtone.mp3");


//For checking the alarm status and deleting the `setAlarm` from the table if it matches the current time.


function checkAlarmStatus() {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    const currentMinute = currentTime.getMinutes();
    const currentSecond = currentTime.getSeconds();
    const currentPeriod = currentHour >= 12 ? 'PM' : 'AM';
  
    const currentAlarmTime = `${currentHour.pad(2)}:${currentMinute.pad(2)}:${currentSecond.pad(2)} ${currentPeriod}`;
  
    for (let i = 0; i < alarmListArr.length; i++) {
      if (alarmListArr[i] === currentAlarmTime) {
        console.log("Alarm ringing...");
        ring.load();
        ring.play();
        document.querySelector("#stopAlarm").style.visibility = "visible";
        document.querySelector("#snoozeAlarm").style.visibility = "visible";
  
        // Get the alarm element and remove it from the table
        const alarmElement = document.getElementById(`alarm${i + 1}`);
        alarmElement.remove();
  
        // Remove the alarm time from the alarmListArr
        alarmListArr.splice(i, 1);
      }
    }
  }


// Script for Time and Date


function updateClock(){
    var now = new Date();
    var dname = now.getDay(),
        mo = now.getMonth(),
        dnum = now.getDate(),
        yr = now.getFullYear(),
        hou = now.getHours(),
        min = now.getMinutes(),
        sec = now.getSeconds(),
        pe = "AM";

        if(hou==0){
            hou = 12;
        }

        if(hou>12){
            hou -=12;
            pe = "PM";
        }

        Number.prototype.pad = function(digits){
            for(var n = this.toString(); n.length<digits; n=0+n);
            return n;
        }

        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var week = ["Sunday", "Monday", "Tusday", "Wednesday", "Thursday", "Friday", "Saturday"];
        var ids =["dayName", "month", "dayNum", "year", "hour", "minutes", "seconds", "period"];
        var values = [week[dname], months[mo], dnum.pad(2),yr,hou.pad(2),min.pad(2),sec.pad(2),pe];
        
        for(var i=0; i<ids.length;i++){
            document.getElementById(ids[i]).firstChild.nodeValue = values[i];
        }

        checkAlarmStatus();  // Call the checkAlarmStatus function to check the alarm status

        for(let i=0; i<alarmListArr.length;i++){
            if(alarmListArr[i]==`${hou.pad(2)}:${min.pad(2)}:${sec.pad(2)} ${pe}`){
                console.log("Alarm ringing...");
                ring.load();
                ring.play();
                document.querySelector("#stopAlarm").style.visibility= "visible";
                document.querySelector("#snoozeAlarm").style.visibility= "visible";
            }
        }
}

function initClock() {
    updateClock();
    window.setInterval("updateClock()",1000);
}


//Set Alarm section


for(let i=12; i>0;i--){
    i=i<10 ? "0"+i :i;
    let option = `<option value="${i}">${i}</option>`;
    selectMenu[0].firstElementChild.insertAdjacentHTML("afterend", option);
}

for(let i=59; i>=0;i--){
    i=i<10 ? "0"+i :i;
    let option = `<option value="${i}">${i}</option>`;
    selectMenu[1].firstElementChild.insertAdjacentHTML("afterend", option);
}

for(let i=2; i>0;i--){
    let ampm = i== 1? "AM":"PM";
    let option = `<option value="${ampm}">${ampm}</option>`;
    selectMenu[2].firstElementChild.insertAdjacentHTML("afterend", option);
}

//add alarm 


function setAlarm(){
    document.querySelector("#alarm-h3").innerText = "Alarms";
    let time = `${selectMenu[0].value}:${selectMenu[1].value}:00 ${selectMenu[2].value}`;
    if(time.includes("setHour") || time.includes("setMinute") || time.includes("AM/PM")){
        alert("Please, Select Valide Input");
    }else{
        alarmCount++;
        document.querySelector(".alarmList").innerHTML += `
        <div class="alarmLog" id="alarm${alarmCount}">
            <span id="span${alarmCount}">${time}</span>
            <button class="btn-delete" id="${alarmCount}" onClick="deleteAlarm(this.id)">Delete</button>
        </div>`;

        alarmTime = `${selectMenu[0].value}:${selectMenu[1].value}:00 ${selectMenu[2].value}`;
        alarmListArr.push(alarmTime);
        console.log(document.querySelector(".btn-delete").value);
    }

}

setAlarmBtn.addEventListener("click",setAlarm);

//delete alarm

function deleteAlarm(click_id){
    var element = document.getElementById("alarm"+click_id);
    var deleteIndex = alarmListArr.indexOf(document.querySelector("#span"+click_id).innerText);
    alarmListArr.splice(deleteIndex,1);
    element.remove();
}

function snoozeAlarm(click_id) {
    ring.pause();
    document.querySelector("#stopAlarm").style.visibility= "hidden";
    document.querySelector("#snoozeAlarm").style.visibility= "hidden";
    
    createAlarmLog();
}

function stopAlarm(){
    ring.pause();
    document.querySelector("#stopAlarm").style.visibility= "hidden";
    document.querySelector("#snoozeAlarm").style.visibility= "hidden";
}


// Snooze the alarm for 5 minutes

function createAlarmLog(){
    document.querySelector("#alarm-h3").innerText = "Alarms";
    let time = `${selectMenu[0].value}:${parseInt(selectMenu[1].value) + 5}:00 ${selectMenu[2].value}`;
    alarmCount++;
    document.querySelector(".alarmList").innerHTML += `
    <div class="alarmLog" id="alarm${alarmCount}">
        <span id="span${alarmCount}">${time}</span>
        <button class="btn-delete" id="${alarmCount}" onClick="deleteAlarm(this.id)">Delete</button>
    </div>`;

    // snooze for 5 minutes
    const snoozeTime = new Date();
    snoozeTime.setMinutes(snoozeTime.getMinutes() + 5);
    console.log(snoozeTime);

    const hour = snoozeTime.getHours();
    const minute = snoozeTime.getMinutes();
    const second = snoozeTime.getSeconds();

    alarmTime = `${selectMenu[0].value}:${parseInt(selectMenu[1].value) + 5}:00 ${selectMenu[2].value}`;
    alarmListArr.push(alarmTime);
}
