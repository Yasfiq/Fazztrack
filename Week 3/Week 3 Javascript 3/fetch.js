// fetch("https://jsonplaceholder.typicode.com/users").finally(() => {
//     console.log("Proses selesai!");
// }).then((nama) => nama.json()).then((nama) => {
//     let result = [];
//     nama.forEach((hasil,i) => {
//         result.push(hasil.name)
//         console.log(`${i+1}. ${hasil.name}`);
//     });
//     // console.log(result);
//     // const button = document.querySelector('.coba-btn');
//     // button.addEventListener('click',() => {
//     // let list = '';
//     // result.forEach(nama => {
//     //     list +=`<li>${nama}</li>`
//     // })
//     // const ul = document.querySelector('.ul-container');
//     //     ul.innerHTML = list;
//     // })
// }).catch(() => {
//     console.log("Gagal mengambil data");
// })

const fetchName = async () => {
    try {
        const data = await fetch("https://jsonplaceholder.typicode.com/users")
        const result = await data.json();
        if (data.ok) {
           Promise.resolve(result.map((name,i) => console.log(`${i+1}. ${name.name}`)))
        } else {
            console.error(new Error("Fetch error! Gagal mengambil data!"));
        }
    } catch(error) {
        console.error(error);
    }
}

fetchName()