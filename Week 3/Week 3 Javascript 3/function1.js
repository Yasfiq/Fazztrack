const cekMusim = (month) => {
    return new Promise((success, reject) => {
        setTimeout(() => {
            const kemarau = ['April','Mei','Juni','Juli','Agustus','September'];
            const hujan = ['Oktober','November','Desember','Januari','Februari','Maret'];
            let cek = "";
            for (let i = 0; i < kemarau.length; i++) {
                if (month.toLowerCase() == kemarau[i].toLowerCase()) {
                    cek += 'kemarau'
                } else if (month.toLowerCase() == hujan[i].toLowerCase()) {
                    cek += 'hujan'
                }
            }
            if (cek == 'kemarau') {
                success(`Bulan ${month} adalah musim kemarau`)
            } else if (cek == 'hujan') {
                success(`Bulan ${month} adalah musim hujan`)
            } else {
                reject(new Error(`${month} bukan nama bulan!`))
            }
        },2000)
    })
    // .then(result => result)
    .catch(error => error)
}
cekMusim("oktober").then(result => console.log(result));





// const cekMusim = async (month) => {
//     try {
//         return await new Promise((success, reject) => {
//             setTimeout(() => {
//                 const kemarau = ['April','Mei','Juni','Juli','Agustus','September'];
//                 const hujan = ['Oktober','November','Desember','Januari','Februari','Maret'];
//                 let cek = "";
//                 for (let i = 0; i < kemarau.length; i++) {
//                     if (month.toLowerCase() == kemarau[i].toLowerCase()) {
//                         cek += 'kemarau'
//                     } else if (month.toLowerCase() == hujan[i].toLowerCase()) {
//                         cek += 'hujan'
//                     }
//                 }
//                 if (cek == 'kemarau') {
//                     success(`Bulan ${month} adalah musim kemarau`)
//                 } else if (cek == 'hujan') {
//                     success(`Bulan ${month} adalah musim hujan`)
//                 } else {
//                     reject(new Error(`${month} bukan nama bulan!`))
//                 }
//             },2000)
//         })
//     } catch (error) {
//         console.log(error);
//     }
// }
// cekMusim("agustus").then(result => console.log(result));