// const hour = document.getElementById("hour");
// const min = document.getElementById("min");
// const sec = document.getElementById("sec");

// const date = new Date();



const updateTime = () => {
    const hour = document.getElementById("hour");
    const min = document.getElementById("min");
    const sec = document.getElementById("sec");

    const date = new Date();
    hour.innerHTML=date.getHours()<10?"0"+date.getHours():date.getHours();
    min.innerHTML=date.getMinutes()<10?"0"+date.getMinutes():date.getMinutes();
    sec.innerHTML=date.getSeconds()<10?"0"+date.getSeconds():date.getSeconds();
}

setInterval(()=>{
    updateTime()
},1000)