class Human {
    constructor(name, address) {
        this.name = name;
        this.address = address; 
    }
    _call() {
        console.log('Call meas a ${this.name}')
    }
}

class Programmer extends Human {
    constructor(name, address, task, salary) {
        super(name, address);
        this.task = task;
        this.salary = salary;
    }
    doCall(){
        super._call()//will run
    }
}

let sb = new Human("Sabrina", "Jakarta");
let job = new Programmer("Developer", "$1000");
console.log(sb._call()) // call me as a Sabrina
/*Meskipun ini gak error ketika kita panggil protected secara public.
tapi kita harus paham method ini protected, yang semestinya hanya
boleh dipanggil di dalam class declaration atau sub-classnya.*/
console.log(job.doCall())