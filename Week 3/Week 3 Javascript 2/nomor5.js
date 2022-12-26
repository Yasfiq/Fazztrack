let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874"
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org"
}

// SPREAD OPERATOR
const ubahNama = {
    ...data, 
    name: "Mohammad Yasfiq", 
    email: "mohammadyasfiq31@gmail.com", 
    hobby: ["Olahraga, Programming, Nonton Film/Anime"]};
console.log(ubahNama);

// DESTRUCTURING
const {address: {street, city}} = data;
console.log(`${street} street, ${city} City`);