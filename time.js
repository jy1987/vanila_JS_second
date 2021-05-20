const getTime = document.querySelector(".time");

const dDay = new Date("2021-12-25T00:00:00")
//console.log(dDay)

function time(){
    const now = Date.now();
    const diff = dDay-now;
    
}

function init(){
    time()}

setInterval(init,1000);

