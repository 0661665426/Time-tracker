/*let Work = {
timeframe:{
  daily: {
    current: 5,
    previous: 7
  },
  weekly: {
    current: 32,
    previous: 36
  },
  monthly: {
    current: 103,
    previous: 128
  },
}
}
console.log(Work);


let Play = {
 timeframe:{
  daily: {
    current: 1,
    previous: 2
  },
  weekly: {
    current: 10,
    previous: 8
  },
  monthly: {
    current: 23,
    previous: 29
  },
}
}

let Study = {
  daily: {
    current: 0,
    previous: 1
  },
  weekly: {
    current: 4,
    previous: 7
  },
  monthly: {
    current: 13,
    previous: 19
  },
}


let Exercise = {

  daily: {
    current: 1,
    previous: 1
  },
  weekly: {
    current: 4,
    previous: 5
  },
  monthly: {
    current: 11,
    previous: 18
  },
}



let Social = {

  daily: {
    current: 1,
    previous: 3
  },
  weekly: {
    current: 5,
    previous: 10
  },
  monthly: {
    current: 21,
    previous: 23
  },

}

let SelfCare = {

  daily: {
    current: 0,
    previous: 1
  },
  weekly: {
    current: 2,
    previous: 2
  },
  monthly: {
    current: 7,
    previous: 11
  },
}
function log(){
  console.log(SelfCare);
}*/


function daily(){
  document.getElementById("work").innerHTML="5hrs";
  document.getElementById("works").innerHTML="yesterday - 7hrs";
  document.getElementById("play").innerHTML="1hrs";
  document.getElementById("plays").innerHTML="yesterday - 2hrs";
  document.getElementById("study").innerHTML="0hrs";
  document.getElementById("studied").innerHTML="yesterday - 1hrs";
  document.getElementById("exercise").innerHTML="1hrs";
  document.getElementById("exercises").innerHTML="yesterday - 1hrs";
  document.getElementById("social").innerHTML="1hrs";
  document.getElementById("socials").innerHTML="yesterday - 3hrs";
  document.getElementById("self").innerHTML="0hrs";
  document.getElementById("selfs").innerHTML="yesterday - 1hrs";
} 
function weekly(){
  document.getElementById("work").innerHTML="32hrs";
  document.getElementById("works").innerHTML="lastweek - 36hrs";
  document.getElementById("play").innerHTML="10hrs";
  document.getElementById("plays").innerHTML="lastweek - 8hrs";
  document.getElementById("study").innerHTML="4hrs";
  document.getElementById("studied").innerHTML="lastweek - 7hrs";
  document.getElementById("exercise").innerHTML="4hrs";
  document.getElementById("exercises").innerHTML="lastweek - 5hrs";
  document.getElementById("social").innerHTML="5hrs";
  document.getElementById("socials").innerHTML="lastweek - 10hrs";
  document.getElementById("self").innerHTML="2hrs";
  document.getElementById("selfs").innerHTML="lastweek - 2hrs";
} 
function monthly(){
  document.getElementById("work").innerHTML="103hrs";
  document.getElementById("works").innerHTML="last month - 128hrs";
  document.getElementById("play").innerHTML="23hrs";
  document.getElementById("plays").innerHTML="last month - 29hrs";
  document.getElementById("study").innerHTML="13hrs";
  document.getElementById("studied").innerHTML="last month - 19hrs";
  document.getElementById("exercise").innerHTML="11hrs";
  document.getElementById("exercises").innerHTML="last month - 18hrs";
  document.getElementById("social").innerHTML="21hrs";
  document.getElementById("socials").innerHTML="last month- 23hrs";
  document.getElementById("self").innerHTML="7hrs";
  document.getElementById("selfs").innerHTML="last month - 11hrs";
} 