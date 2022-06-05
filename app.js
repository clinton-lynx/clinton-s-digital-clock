// DECLARATIONS & SELECTORS
const timeEl = document.querySelector('.time');
const sumbitEl = document.querySelector('#set-el');
let inputEl = document.querySelector('#input-el');

function setAlarm() {
    let current = `${new Date()}`;
    let alarmTime = new Date(inputEl.value);
    console.log(current);
    console.log(alarmTime);     
    if (current == alarmTime) {
        console.log('play alarm');
    } else {
        console.log('not yet bro');
    }


}




// EVENT LISTENERS 
sumbitEl.addEventListener('click', e =>{
    e.preventDefault();
    console.log( inputEl.value);
} )






// FUNCTIONS
function getTime() {
    const time = new Date()
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
   if (hours < 10) {
    timeEl.innerHTML = `0${hours}:${minutes}:${seconds}${amOrPm}`;
   } else {
    timeEl.innerHTML = `${hours}:${minutes}:${seconds}${amOrPm}`;
   }
}

// setInterval(() => {
    // getTime(), setAlarm()
// }, 1000);
// 