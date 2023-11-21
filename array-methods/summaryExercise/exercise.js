const students = [
  { nome: "Alice", voto: 95 },
  { nome: "Bob", voto: 88 },
  { nome: "Carol", voto: 76 },
  { nome: "David", voto: 92 },
  { nome: "Eve", voto: 84 },
];

function arrayAnalyzer(array) {
 array.forEach(el =>  console.log(`Nome studente: ${el.nome}`));
 console.log("Studente con voto superiore a 90:" , array.find(el => el.voto > 90));
 let avg = array.reduce((a, student) => a + student.voto / array.length, 0);
 console.log("Media voto studenti:",Math.round(avg));
 array.map(student => console.log("Nome studente in maiuscolo:", student.nome.toUpperCase()));
 console.log("Studenti con voto superiore ad 85:", array.filter(student =>student.voto > 85));
}

arrayAnalyzer(students)