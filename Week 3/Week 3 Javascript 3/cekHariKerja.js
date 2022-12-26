// const cekHariKerja = (day) => {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 const dataDay = ['senin','selasa','rabu','kamis','jumat'];
//                 let cek = dataDay.find((item) => {
//                     return item === day
//                 })
//                 if (cek) {
//                     resolve(cek)
//                 } else {
//                     reject(new Error('Hari ini bukan hari kerja!'))
//                 }
//             }, 3000)
//         }).then((result) => console.log(`Hari ${result} adalah hari kerja`))
//         .catch((error) => console.log(error))
// }
// cekHariKerja("senin")
// .then((result) => console.log(result))
// then akan menghandle hasil eksekusi baik itu berhasil maupun gagal, sedangkan catch akan menghandle bila terdapat error pada kode.




const cekHariKerja = async (day) => {
    try {
        return await new Promise((resolve, reject) => {
            setTimeout(() => {
                const dataDay = ['senin','selasa','rabu','kamis','jumat'];
                let cek = dataDay.find((item) => {
                    return item === day
                })
                if (cek) {
                    resolve(`Hari ${cek} adalah hari kerja`)
                } else {
                    reject(new Error('Hari ini bukan hari kerja!'))
                }
            }, 3000)
        })
    } catch(error) {
        return error;
    }
}
cekHariKerja("senin").then((result) => console.log(result));
// Async digunakan untuk merubah function Asynchronous menjadi Synchronous dan Await untuk menunggu perintah yang membutuhkan waktu untuk menyelesaikannya baru mengeksekusi perintah selanjutnya.
// Sedangkan try untuk mencoba menjalankan sebuah perintah/kode dan jika ada error akan menjalankan perintah/kode yang ada di dalam catch