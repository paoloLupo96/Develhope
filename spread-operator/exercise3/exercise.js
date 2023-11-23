const originalArray = [1, 2, 3, 4, 5];
const cloneArray = [...originalArray];

console.log("Orginal array:", originalArray);
console.log("Clone array:", cloneArray);

//Dimostrazione dell'indipendenza dei due array:

originalArray.push(6);

console.log("Original after push:", originalArray);
console.log("Clone after push:", cloneArray);