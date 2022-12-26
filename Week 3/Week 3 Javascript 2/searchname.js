const searchName = (input, limit, callback) => {
    const name = [
        'Abigail', 'Alexandra', 'Alison',
        'Amanda', 'Angela', 'Bella',
        'Carol', 'Caroline', 'Carolyn',
        'Deirdre', 'Diana', 'Elizabeth',
        'Ella', 'Faith', 'Olivia', 'Penelope'
    ]
    let result = name.filter(data => data.toLowerCase().includes(input.toLowerCase())).slice(0,limit).sort();
    return callback(result);
}

const resultData = (result) => {
    console.log(result);
}

searchName("an",3,resultData);
searchName("CAROL",2,resultData);