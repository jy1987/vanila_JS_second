const getTime = document.querySelector(".time");

const dDay = new Date("2021-12-25T00:00:00")
//console.log(dDay)

function time(){
    const now = Date.now();
    const diff = dDay-now;
    //console.log(diff);
    const per = Math.floor(diff/1000);
    const day = Math.floor(per/(60*60*24));
    //console.log(day);
    const hour = Math.floor((per%(60*60*24))/(60*60));
    //console.log(hour);
    const minute = Math.floor((per%(60*60))/60);
    //console.log(minute);
    const second = (per%60);
    //console.log(second);
    getTime.innerText=`${day}days ${ hour < 10 ? `0${hour}` : `${hour}`}h ${minute < 10 ? `0${minute}` : `${minute}`}m ${second <10 ? `0${second}` : `${second}`}s`;
    
    if (second % 2 ===1) {
        getTime.style.color ='pink'
    } else {
        getTime.style.color ='orange'
    }
}

function init(){
    time()}

setInterval(init,1000);

