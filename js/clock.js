const clockP = document.getElementById('my-clock');
const dayTag = document.getElementById('current-date');

export const myClock = () => {
    const currentDate = new Date();
    const options = { weekday: 'short', month: 'long', day: 'numeric' };
    const dateFormat = new Intl.DateTimeFormat('en-US', options).format(currentDate);
    let hour = currentDate.getHours();
    let minute = currentDate.getMinutes();

    const str_minute = minute.toString();
    if (str_minute.length === 1)
        minute = "0" + minute

    const str_hour = hour.toString();
    if (str_hour.length === 1)
        hour = "0" + hour

    const hourToSend = hour + ':' + minute ;
    clockP.innerHTML = hourToSend;
    dayTag.innerHTML = dateFormat;
    setTimeout('myClock()',1000);
}