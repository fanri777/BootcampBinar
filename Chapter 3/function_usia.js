function penggunaBingle(batasUsia) {
    if (batasUsia<13) {
        return "Maaf, usia Anda di bawah ketentuan pengguna";
    } else if (batasUsia === undefined) {
        return "Mohon Masukan angka usia anda";
    } else {
        return "Silahkan lanjutkan registrasi"
    }
}
console.log (penggunaBingle(14));