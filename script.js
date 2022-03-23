const countdown = () =>{
    const countDate = new Date('March 27, 2022 00:00:00').getTime()
    const now = new Date().getTime();
    const gap = countDate - now

    //How does the time work? With Miliseconds

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    //Calculate

    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);
    console.log(textSecond);

    
    document.querySelector('.day').innerText = textDay
    document.querySelector('.hour').innerText = textHour
    document.querySelector('.minute').innerText = textMinute
    document.querySelector('.second').innerText = textSecond
}
setInterval(()=>{
    countdown()
}, 1000)
















// function startTimer(duration, display){

//     let timer = duration, minutes, seconds;

//     setInterval(()=>{

//         minutes = parseInt(timer / 60)
//         seconds = parseInt(timer % 60)

//         minutes = minutes < 10 ? "0" + minutes : minutes;
//         seconds = seconds < 10 ? "0" + seconds : seconds;

//         display.textContent = minutes + ":" + seconds;

        

//         if(--timer < 0){
//             timer = duration;
//         }

//     }, 1000)

// }

// window.onload = function(){
//     let duration = 60 * 70;
//     let display = document.querySelector("#timer");

//     startTimer(duration, display);
// }