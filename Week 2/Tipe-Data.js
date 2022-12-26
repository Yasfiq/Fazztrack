// 2.	Buat variabel dengan nama biodata dan tipe data object
let biodata = { // dengan value dan tipe data sebagai berikut:
    name: 'Mohammad Yasfiq', // ●	name (string)
    age: 18, // ●	age (number)
    hobbies: ['Sport','Programming','Watch Film/Anime'],// ●	hobbies (array)
    isMarried: false, // ●	IsMarried (boolean)
    schoolList: [ // ●	schoolList (Array of Object) with key name, yearIn, yearOut, and major (if any, if no set “null” )
        {schoolName: 'MI Negeri 19 Jakarta', yearIn: 2010, yearOut: 2016, major: null},
        {schoolName: 'SMP Islam Almustarih', yearIn: 2016, yearOut: 2019, major: null},
        {schoolName: 'SMK Citra Pariwisata', yearIn: 2019, yearOut: 2022, major: 'Multimedia'}
    ],
    skills: [ // ●	skills (Array of Object) with key skillName and level (beginner, advanced, expert)
        {skillName: 'Graphic Design', level: 'Beginner'},
        {skillName: 'Videography', level: 'Beginner'},
        {skillName: 'Network Troubleshooting', level: 'Beginner'}
    ],
    interestInCoding: true// ●	interestInCoding (Boolean)
} 

console.log(biodata.skills[0].skillName);