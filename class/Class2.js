import 
class Students extends Teacher{
    dowork(){
        console.log("Do homework teacher");
    }
    send(){
        console.log("Send to teacher");
    }
}
const col = new Students();
col.home();
col.setName("daduon");
col.getName();
col.teach();
col.dowork();
col.send();