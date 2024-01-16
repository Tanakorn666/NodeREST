function digitalClock(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    const formattedTime = [ 
        padZero(hours),
        padZero(minutes),
        padZero(remainingSeconds) ].join(':');

    return formattedTime;
}

function padZero(number) {
    return (number < 10) ? '0' + number : number.toString();
}

console.log(digitalClock(5025));
console.log(digitalClock(61201));
console.log(digitalClock(87000));