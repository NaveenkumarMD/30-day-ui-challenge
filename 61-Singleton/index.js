class SingletonClass{
    static instance=null;
    static getInstance(){
        if(!this.instance){
            this.instance=new SingletonClass();
        }
        return this.instance;
    }
    constructor() {
        this.name="done"
    }
    log(){
        console.log("Naveenkumar ")
    }
}

const obj=SingletonClass.getInstance();
console.log(obj.name);
