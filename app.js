const hoursElement = document.querySelector('.hour');
const minutesElement = document.querySelector('.minute');
const secondsElement = document.querySelector('.second');

function updateClock () {
    const currentDate = new Date();
    // setTimeout(updateClock, 1000);
    const hour = currentDate.getHours();
    const minute = currentDate.getMinutes();
    const second = currentDate.getSeconds();

    // converting hours to degree
    const hourDeg = (hour / 12) * 360;
    hoursElement.style.transform = `rotate(${hourDeg}deg)`;
    
    // converting hours to degree
    const minuteDeg = (minute / 60) * 360;
    minutesElement.style.transform = `rotate(${minuteDeg}deg)`;
   
    // converting hours to degree
    const secondDeg = (second / 60) * 360;
    secondsElement.style.transform = `rotate(${secondDeg}deg)`;
}

// updateClock();

setInterval(updateClock, 1000)