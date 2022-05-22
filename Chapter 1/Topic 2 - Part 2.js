/* VAR */

/*Buat variabel var dengan cara deklarasi dulu*/
var harga; //declaration
harga = 1000; //Assignment

/*Buat variabel var yagn langsung kita kasih nilai */
var harga = 1000


var diskon= 500
if (true) {
    var diskon = 300
}
console.log (diskon)


var diskon = 500
function diskonScope () {
    var diskon = 300
console.log(diskon)
}
diskonScope ()
console.log(diskon)

/* LET */
let name;  // declaration
console.log(name)
name ='Bot' //assignment
console.log(name) //output : Bot
name ='Bot Sabrina' //reassigned
console.log(name) //output : Bot Sabrina

