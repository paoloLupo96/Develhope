let users = [
    {   id: 1,
        name: "Mario",
        surname:"Rossi",
        age: 35,
        languages: ["html", "css", "javascript"]
    },
    {   id: 2,
        name: "Franco",
        surname:"Verdi",
        age: 34,
        languages: ["python", "javascript"]
    }
];

// users.forEach(e => console.log(e.name));

for(let i = 0 ; i < users.length ; i++){
    console.log(users[i].name);
}

// let avgLanguages = users.reduce((a, user) => a + user.languages.length / users.length, 0);

// console.log(avgLanguages);

let totalLanguages = 0;
for(let i = 0 ; i < users.length ; i++){
   totalLanguages += users[i].languages.length;
} 

let avg = totalLanguages / users.length;

console.log(avg);




