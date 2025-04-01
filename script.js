const d = document.getElementById("days"); 
const h = document.getElementById("hours"); 
const m = document.getElementById("minutes"); 
const s = document.getElementById("seconds"); 
function refresh(){
    const currentyear = new Date().getFullYear();
    const currentDate = new Date();
    const newyear = new Date(`January 1 ${currentyear+1} 00:00:00`);
    const diff = newyear-currentDate;
    const days = Math.floor(diff/1000/60/60/24);
    const hours = Math.floor((diff/1000/60/60)%24);
    const min = Math.floor((diff/1000/60)%60);
    const sec = Math.floor((diff/1000)%60);
    d.innerHTML=days<10?'0'+days:days;
    h.innerHTML=hours<10?'0'+hours:hours;
    m.innerHTML=min<10?'0'+min:min;
    s.innerHTML=sec<10?'0'+sec:sec;
}
setInterval(refresh,1000);