const seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
    let cekTipe = Array.isArray(dataArray);
    if (nilaiAwal == undefined || nilaiAkhir == undefined || dataArray == undefined) {
        return "Masukkan nilai dengan lengkap!";
    } else if (cekTipe == false) {
        return "Data Bilangan harus array!";
    } else if (typeof nilaiAwal != 'number' || typeof nilaiAkhir != 'number') {
        return "Nilai awal dan nilai akhir harus number!";
    } else if (dataArray[0] == undefined) {
        return "Array harus terisi!";
    } else if (nilaiAkhir < nilaiAwal) {
        return "Nilai akhir harus lebih besar dari nilai awal!"
    } else if (dataArray.length <= 5) {
        return "Jumlah angka dalam dataArray harus lebih dari 5!";
    } else {
        let result = [];
        for (let i = 0; i < dataArray.length; i++) {
            if (dataArray[i] >= nilaiAwal && dataArray[i] <= nilaiAkhir) result.push(dataArray[i])
        }
        if (result.length == 0) {
            return "Nilai tidak ditemukan"   
        } else {
            return result.sort(function(a, b){return a - b});
        }
    }
}

console.log(seleksiNilai(5,20)); // Nilai tidak lengkap
console.log(seleksiNilai(5,20,30)); // Data bukan array
console.log(seleksiNilai(5, 20 , [])); 
console.log(seleksiNilai(15, 3 , [2, 25, 4, 14, 17, 30, 8])); // Nilai awal lebih besar dari nilai akhir
console.log(seleksiNilai(4, 17 , [2, 25, 4])); // Nilai array kurang dari 5
console.log(seleksiNilai(5, 17 , [2, 25, 4, 1, 30, 18])); // Nilai tidak ditemukan