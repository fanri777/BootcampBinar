class Human {
    constructor(warnaMata, tanggalLahir, sapaan) {
        this.warnaMata = warnaMata;
        this.tanggalLahir = tanggalLahir;
        this.sapaan = sapaan;
    }
    
static warnaMata = "hitam"

introduce() {
    console.log('Hi, Tanggal lahir saya adalah ${this.tanggalLahir}');
}
}
console.log(Human.isLivingOnEarth);


Human.prototype.greet = function(Sapaan) {
    console.log('Hi, ${name}, Im ${this.name}');   
}
Human.destroy = function (thing) {
    console.log('Human is destroying ${thing}');   
}

let mj = new Human("Hitam", "Tangal Lahir");

console.log(mj);

console.log(mj instanceof Human)

mj.greet("Selamat Malam");

Human.destroy("Amazon Forest");
