//Buat child clas dari class Human
class Programmer extends Human {
    constructor(name, address, programmingLanguage) {
        //memanggil constructor super/parent class
        //dalam kasus ini Human.constructor
        super(name, address);
        this.programmingLanguage = programmingLanguage
    }
introduce() {
    // memanggil instance method introduce dari super class
    super.introduce();
    console.log("I can write",
    this.programmingLanguage);
}

code() {
    console.log("code some",
    this.programmingLanguage[Math.floor(Math,random() *
    this.programmingLanguage.length)]);
}
}