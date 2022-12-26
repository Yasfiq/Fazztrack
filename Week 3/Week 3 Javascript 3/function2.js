const searchMovieTitle = (keyword) => {
    if (typeof keyword != 'string') {
        return "Tipe Data harus string!"
    }
    fetch("http://www.omdbapi.com/?apikey=b8e71726&s=" + keyword)
    .then(result => result.json()).then(result => {
        let movies = result.Search;
        let penelusuran = "Penelusuran anda "+`"${keyword}"`;
        let cek = Array.isArray(movies);
        if (cek) {
            console.log(penelusuran+"\n"+movies.map((movie,i) => `${i+1}. ${movie.Title}\n`))
        } else {
            console.log(penelusuran+"\n"+"Film tidak ditemukan!");
        }
    }).catch(error => console.log(error))
}
searchMovieTitle("st12")