
function lancio() {
   return Math.floor(Math.random() * 6) + 1;
}

function lanciaDadi() {
   console.log("Lancio dei dadi in corso...");
   let dado1 = lancio();
   let dado2 = lancio();
   setTimeout(() => { 
      console.log(`Dado 1: ${dado1}, Dado 2: ${dado2}`) 
   }, 2000);
}

lanciaDadi();