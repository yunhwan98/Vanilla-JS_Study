const clock = document.querySelector('#clock');

function changeTime(){
    
    const date = new Date();
    //시간 변경해주기
    clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

//1초마다 함수호출
setInterval(changeTime,1000);
