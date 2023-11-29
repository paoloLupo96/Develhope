let user = { name: "John", age: 30 }

function fetchDataFromAPI(callback) {
    console.log("Richiesta inviata.");
    setTimeout(() => {
        console.log("Attendere, prego...")
        callback(user)
    }, 1000)
}

function handleData(data) {
    setTimeout(() => {
        console.log(data)
    }, 2500 );
}

fetchDataFromAPI(handleData);