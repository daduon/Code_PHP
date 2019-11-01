var displayDate = () =>{
    let timer = new Date();
    let hours = ( timer.getHours() % 12 ).toString();
    let minutes = timer.getMinutes().toString();
    let secondes = timer.getSeconds().toString();
    if (hours.length < 2){
        hours = '0' + hours;
    }
    if (minutes.length < 2){
        minutes = '0' + minutes;
    }
    if (secondes.length < 2){
        secondes = '0' +secondes;
    }
    if (timer.getHours() < 12){
        document.querySelector('h1').innerHTML = hours+ ":" + minutes + ":" + secondes + "AM";
    }else{
        document.querySelector('h1').innerHTML = hours+ ":" + minutes + ":" + secondes + "PM";
    }
    if (timer.getHours() == 12){
        document.querySelector('h1').innerHTML = hours+ ":" + minutes + ":" + secondes + "AM";
    }
    if (timer.getHours() < 12){
        document.querySelector('h2').innerHTML = "Good morning";
    }else if (timer.getHours() < 17){
        document.querySelector('h2').innerHTML = "Good afternoon";
    }else if (timer.getHours() < 19){
        document.querySelector('h2').innerHTML = "Good evening";
    }else{
        document.querySelector('h2').innerHTML = "Good night";
    }
}
displayDate();
setInterval(displayDate, 1000);