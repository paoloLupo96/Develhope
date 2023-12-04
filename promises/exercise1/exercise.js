let user = { name: "John", age: 30 }

function fetchDataFromAPI() {
    return new Promise((resolve, reject) => {
        if (user) {
            resolve(user)
        } else {
            reject("Error")
        }
    })
}

fetchDataFromAPI(user)
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
