const bahasaIndonesia = 90;
const bahasaInggris = 80;
const mtk = 70;
const ipa = 70;

function hitungRataRataUN(bhsIndonesia, bhsInggris, mtk, ipa) {
    if (bhsIndonesia === undefined || bhsInggris === undefined || mtk === undefined || ipa === undefined) {
        return "Semua nilai harus terisi!";
    } else if (typeof bhsIndonesia != 'number' || typeof bhsInggris != 'number' || typeof mtk != 'number' || typeof ipa != 'number') {
        return "Masukkan nilai dengan tipe data number!";
    } else {
        let hasil = (bhsIndonesia+bhsInggris+mtk+ipa) / 4;
        let grade = "";
        if (hasil >= 90 && hasil <= 100) {
            grade = 'A';
        } else if (hasil >= 80 && hasil < 90) {
            grade = 'B';
        } else if (hasil >= 70 && hasil < 80) {
            grade = 'C';
        } else if (hasil >= 60 && hasil < 70) {
            grade = 'D'
        } else if (hasil >=0 && hasil < 60) {
            grade = 'E';
        } else {
            return "Tidak boleh lebih dari seratus";
        }
        return "Rata-rata = " +hasil+ "\n" + "Grade = " +grade;
    } 
}

console.log(hitungRataRataUN(bahasaIndonesia,bahasaInggris,mtk)+'\n'+"Ini output jika ada yang tidak terisi"+'\n');
console.log(hitungRataRataUN(bahasaIndonesia,bahasaInggris,mtk,"90")+'\n'+"Ini output jika tipe data bukan number"+'\n');
console.log(hitungRataRataUN(bahasaIndonesia,bahasaInggris,mtk,1000)+'\n'+"Ini output jika lebih dari seratus"+'\n');
console.log(hitungRataRataUN(bahasaIndonesia,bahasaInggris,mtk,ipa));