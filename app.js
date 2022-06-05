// DECLARATIONS & SELECTORS
const timeEl = document.querySelector('.time');
const sumbitEl = document.querySelector('#set-el');
let inputEl = document.querySelector('#input-el');
const clearEl = document.getElementById("clear-el")
let par = document.querySelector('.par-el')
const audio = new Audio ('1.mp3');
audio.loop = true;
// audio.autoplay = true;
// 
// EVENT LISTENERS 
sumbitEl.addEventListener('click', e =>{
    e.preventDefault();
    console.log( inputEl.value);
} )

clearEl.addEventListener('click', clearAlarm)




// FUNCTIONS
function getTime() {
    const time = new Date();
   let hours =  time.getHours();
   const minutes = time.getMinutes();
   const seconds = time.getSeconds();
   let amOrPm = hours >= 12 ? 'PM' : 'AM';

    if (hours >= 12 ) {
        timeEl.innerHTML = `0${hours}:${minutes}:${seconds}${amOrPm}`;
        hours %=12;

        if (hours === 0 ) {
            return 12;
        }
    } else {
        timeEl.innerHTML = `${hours}:${minutes}:${seconds}${amOrPm}`;
    
       } 
   if (hours < 10 || minutes < 10 || seconds < 10 ) {
    timeEl.innerHTML = `0${hours}:${minutes}:${seconds}${amOrPm}`;
   } else {
    timeEl.innerHTML = `${hours}:${minutes}:${seconds}${amOrPm}`;
   }
}

function setAlarm() {
    let current = `${new Date()}`;
    let alarmTime = new Date(inputEl.value);
    console.log(current);
    console.log(alarmTime);     
    if (current == alarmTime) {
        audio.play(); 
        console.log('play alarm');
    } else {
        console.log('not yet bro');
    }
}




function clearAlarm() {
 if  (!inputEl.value === false ){ audio.pause();
    console.log('stop alarm song');
    inputEl.value = "";
 }else {
    par.innerText = '*** please, set an alarm ***' 
    par.style.color = 'red';
    }
}
function alarmSetter() {
    if (!inputEl.value === false ) {
        alert('alarm set')
        setInterval(() => {
             setAlarm()
        }, 1000);    
    } else {
    par.innerText = '*** please, set an alarm ***' 
    par.style.color = 'red';
    }
    
        
}
setInterval(() => {
    getTime()
}, 1000);
