/*TIPE DATA : PRIMITIF (STRING, NUMBER, BOOLEAN, NULL, UNDIFINED), NON PRIMITIF (OBJECT, ARRAY) */

let pesan = "Hello World";
console.log (typeof pesan);     //output string
console.log (typeof 10);     //output number
console.log (typeof true);     //output Boolean

//Kutip dua
const stringBiasa = "Ini string pake kutip dua";
const stringAneh = "Ini string dengan karakter aneh @#$%";
const stringPakeAngka = "Ini string pake angka 123345";

//Kutip satu
const stringIsiKutipSatu = 'Ini string pake kutip dua';

//Backtick
const stringPakeBacktick = `Ini string pake kutip kebalik`;


// Number
console.log(1/0); //Output : Infinity
console.log("Bukan Number"/0); //Output : NaN


// Boolean (True - False)
let a = 1;
let b = 1;
let apakahSamaDenganB = a == b;
console.log(apakahSamaDenganB);  //Output : True


//Null
let bukuA= null;
console.log(bukuA); //Output : null;

//Undifined
let tidakTerdefinisi;
console.log(tidakTerdefinisi); //Output : Undifined


//OBJECT
const object = {
    Hello : 'World'
}

/*ARRAY*/
//PUSH
const fruits = ["Apple", "Orange", "Durian"]
fruits.push("Lemon")
console.log(fruits) 


//POP
const buah = ['Apple', 'Orange', 'Durian']
buah.pop()
console.log(buah)

//SHIFT
const buah2an = ["Apple", "Orange", "Durian"]
buah2an.shift()
console.log(buah2an)

//UNSHIFT
const buah2 = ["Apple", "Orange", "Durian"]
buah2.unshift("strawberry")
console.log(buah2)