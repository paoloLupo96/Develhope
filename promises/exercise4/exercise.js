function fetchDataFromAPI() {
  return new Promise((resolve, reject) => {
    let randomNumb = Math.random() * 0.6;
    if (randomNumb < 0.5) {
      resolve("Data retrieved successfully");
    } else reject(new Error("Error: Failed to fetch data"));
  });
}

fetchDataFromAPI()
  .then((data) => console.log(data))
  .catch((error) => console.log(error.message));
