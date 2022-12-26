function cekPalindrome (kata) {
    let hasil = "";
    let teksReverse;
    if ( kata.length <= 2 ) {
        return "Teks harus lebih dari 2 huruf!";
    } else if ( typeof kata != "string" ) {
        return "Tipe data harus string!";
    } else {
        let teks = kata.replaceAll(/\s/g, "");
        for (let x = teks.length-1; x >= 0; x--) {
            hasil += teks[x];
        }
        teksReverse = jadiHurufKecil(hasil);
        if (teksReverse === jadiHurufKecil(teks)) {
            hasil = "Palindrome";
        } else {
            hasil = "Bukan Palindrome";
        }
        return hasil;
    }
}

console.log(cekPalindrome("Ma") + '\n' + "Output jika kurang dari 2 huruf" + '\n');
console.log(cekPalindrome(2002) + '\n' + "Output jika tipe data bukan string" + '\n');
console.log(cekPalindrome("Yasfiq"));
console.log(cekPalindrome("Malam"));

function jadiHurufKecil(teks) {
    let toArray = [];
    for (let index = 0; index < teks.length; index++) {
        let hurufBesar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let hurufKecil = "abcdefghijklmnopqrstuvwxyz";
            toArray[index] = teks[index];
        for (let i = 0; i < hurufKecil.length; i++) {
            if (toArray[index] == hurufBesar[i]) {
                toArray[index] = hurufKecil[i];
            }
        }
    }
    let toString = "";
    for ( let j = 0; j < toArray.length; j++ ) {
        toString += toArray[j];
    }
    return toString;
}