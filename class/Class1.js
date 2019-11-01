export default class Teacher{
    setName(name){
        this.mName = name;
    }
    getName(){
        console.log(this.mName);
    }
    teach(){
        console.log("teacher trian for students");
    }
    home(){
        console.log("homework for students");
    }
}