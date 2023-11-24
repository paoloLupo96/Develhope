function filterArray(arr, callback) {
    const filteredArr = [];
    for(let i = 0 ; i < arr.length ; i++){
        if(callback(arr[i])){
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr
}

function isEven(num) {
 return num % 2 === 0;
}

const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = filterArray(numbers, isEven);
console.log(evenNumbers); // Should output [2, 4, 6]

//Esercizio svolto in pair con Davide Lodde <3