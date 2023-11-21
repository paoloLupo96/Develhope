const fruits = ["Mela", "Banana", "Kiwi", "Fragola"];

//Inizialmente ho scritto questa funzione:
// function modArray(array) {
//     array.forEach(fruit => {
//         fruit = array.join("!")
//         console.log(fruit);
//     })
// };

// ma l'output restituisce l'ultimo elemento dell'array senza il simbolo "!" perchè non ha alcuna virgola da rimpiazzare,
// per attenermi il più possibile alla consegna ho utilizzato questa funzione:


function modArray(array) {
    array.forEach(fruit => {
        fruit = fruit + "!"
        console.log(fruit);
    })
};



modArray(fruits);