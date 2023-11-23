function lanciaDadi(dado1, dado2){
   console.log(`Dado 1 = ${dado1}, Dado 2 = ${dado2}`);
}
 
console.log("Lancio dei dadi in corso...");

setTimeout(()=>{
lanciaDadi(4, 6);
}, 2000)