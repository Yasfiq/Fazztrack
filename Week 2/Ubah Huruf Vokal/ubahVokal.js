function ubahVokal(teks, vokal) {
    const hurufVokal = "aiueoAIUEO";
    if (typeof teks != "string") {
        return "Tipe data teks harus string!";
    } else {
        let teksToArray = ubahJadiArray(teks);
        for ( let i = 0; i < teksToArray.length; i++) {
            for ( let j = 0; j < hurufVokal.length; j++ ) {
                if ( teksToArray[i] === hurufVokal[j] ) {
                    teksToArray[i] = vokal;
                }
            }
        }
        return ubahJadiString(teksToArray);
    }
}

console.log(ubahVokal(12,"o"));

function ubahJadiArray(string) {
    let toArray = [];
    for ( let i = 0; i < string.length; i++ ) {
        toArray[i] = string[i];
    }
    return toArray;
}

function ubahJadiString(array) {
    let toString = "";
    for ( let i = 0; i < array.length; i++ ) {
        toString += array[i];
    }
    return toString;
};