function tambah1(x) {
    let hasil = x + 1;
    return hasil;
}

console.log(tambah1(9))


function jumlahDuaBilangan(a,b) {
var total;
total = a+b;
return total;
}

//Penjumlahan 2 kubus
function jumlahDuaKubus(a,b,c){
    if (c===null){
        c=1;
    }
      
       let volA = a * a * a * c;
       let volB = b * b * b * c;
    let total;
    total = volA+volB;

    return total
}
console.log('test')
console.log(jumlahDuaKubus(2,3,1))
console.log('test2')
console.log(jumlahDuaKubus(2,3,4))



//Penjumlahan 2 kubus yg lain
function jumlahVolumeDuaKubus(a,b){
    let volumeA;
    let volumeB;
    let total;
        volumeA = a * a * a;
        volumeB = b * b * b;

        total = volumeA + volumeB;

    return total;
}
console.log(jumlahVolumeDuaKubus(8,3));
console.log(jumlahVolumeDuaKubus(10,15));