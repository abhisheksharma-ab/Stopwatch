var min=0;
var sec=0;
var msec=0;

var minHeading=document.getElementById("min");
var secHeading=document.getElementById("sec");
var msecHeading=document.getElementById("msec");
var interval;

function timer(){
    msec++;
    msecHeading.innerHTML=msec;

    if(msec>=100){
        sec++;
        secHeading.innerHTML=sec;
        msec=0;
    }
    else if(sec>=60){
        min++;
        minHeading.innerHTML=min;
        sec=0;
    }
}

function start(){
    interval=setInterval(timer,10);
    document.getElementById("startBtn").disabled=true;
}

function pause(){
    clearInterval(interval);
    document.getElementById("startBtn").disabled=false;
}

function reset(){
    showHistory();
    min=0;
    sec=0;
    msec=0;

    minHeading.innerHTML=min;
    secHeading.innerHTML=sec;
    msecHeading.innerHTML=msec;

    pause();
}

function showHistory(){
    var minRecord=document.createElement("h1");
    var secRecord=document.createElement("h1");
    var msecRecord=document.createElement("h1");
    var lineBreak=document.createElement("br");

    var tm=document.createTextNode(min);
    var ts=document.createTextNode(sec);
    var tms=document.createTextNode(msec);

    minRecord.appendChild(tm);
    secRecord.appendChild(ts);
    msecRecord.appendChild(tms);

    if(msec===0){
        alert("can't add empty values");
    }
    else{
        document.getElementById("lastrecord").appendChild(minRecord);
        document.getElementById("lastrecord").appendChild(secRecord);
        document.getElementById("lastrecord").appendChild(msecRecord);
        document.getElementById("lastrecord").appendChild(lineBreak);
    }
}