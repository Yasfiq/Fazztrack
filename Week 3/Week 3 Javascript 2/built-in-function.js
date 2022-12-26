// 1. sort()
const hewan = ["Kucing","Kelinci","Banteng","Ayam","Cicak"];
console.log(hewan.sort());

// 2. reverse()
console.log(hewan.sort().reverse());

// 3. parseFloat()
const random = parseFloat("16:48:45");
const random2 = parseFloat("15Jam");
console.log(random);
console.log(random2);

// 4. includes()
const Rakbuku1 = ["Sejarah", "Biologi", "Resep Masakan", "Jenis-jenis Kebongan", "Cinta itu buta"];
console.log(Rakbuku1.includes("Biologi"));
console.log(Rakbuku1.includes("Fisika"));

// 5,6. pop & splice
const bukuIni = Rakbuku1.pop()
const Rakbuku2 = ["Cerita Malin Kundang","Cerita Tangkuban Perahu","Arti Cinta Dia"];
console.log(Rakbuku1);
console.log(Rakbuku2);
Rakbuku2.splice(1, 0, bukuIni);
console.log(Rakbuku2);
