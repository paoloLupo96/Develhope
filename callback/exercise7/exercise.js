function performOperation(a, b, callback) {
   let sum = a + b;
   const error = new Error("Inserire dei parametri numerici!");

   if (typeof sum === "number") {
      callback(null, `Il risultato della somma è: ${sum}`)
   } else {
      callback(error, null)
   }
}

function displayResult(error, result) {
   if (error) {
      console.log(error);
   } else console.log(result);
}

performOperation(5, 3, displayResult);
