const getMonth = (callback) => {
    setTimeout(() => {
        let error = true;
        let month = ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember']
        if (!error) {
            callback(null,month);
        } else {
            callback(new Error('Sorry Data Not Found!'), []);
        }
    }, 3000)
}

function showResult (error, months) {
    if (error == null) {
        months.map(month => console.log(month));
    } else {
        console.log(error);
    }
}

getMonth(showResult);