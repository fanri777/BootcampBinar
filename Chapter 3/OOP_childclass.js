
class Human {
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }

    introduce() {
        console.log('Hi, my name is ${this.name}')
    }

    work() {
        console.log("work!")
    }
}

//Buat child clas dari class Human
class Programmer extends Human {
    constructor(name, address, programmingLanguage) {
        //memanggil constructor super/parent class
        //dalam kasus ini Human.constructor
        super(name, address);
        this.programmingLanguage = programmingLanguage;
    }
introduce() {
    // memanggil instance method introduce dari super class
    super.introduce();
    console.log("I can write",
    this.programmingLanguage);
}

code() {
    console.log("code some",
    this.programmingLanguage[Math.floor(Math.random() *
    this.programmingLanguage.length)]);
}
}

//buat object dari class Human
let fanri = new Human("Fanri Ahmadi", "Bandung");

//output : Hi, my nsme is Fanri Ahmadi
fanri.introduce();

//buat object dari class programmer
let isyana = new Programmer ("Isyana", "Jakarta", ["Javascript", "Kotlin", "Python"]);

//output : Hi, my name is Isyana I can write ["Javascript", "Kotlin, "Python"]

isyana.introduce();

//output: code some Javascript/Kotlin/Python
isyana.code();

//output: work;
isyana.work();

try {
    //fanri tidak memiliki instance method code karena dibuat menggunakan class Human
    fanri.code()

} catch (err) {
    console.log (err.message);
}

//output : true
console.log(isyana instanceof Human);

//output : true
console.log(isyana instanceof Programmer);