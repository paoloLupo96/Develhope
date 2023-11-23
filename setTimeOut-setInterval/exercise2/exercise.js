let tempoRimanente = 10;

function contoAllaRovescia() {
  tempoRimanente--,
  console.log("Conto alla rovescia in corso:", tempoRimanente);
  if(tempoRimanente === 0){
        clearInterval(id);
        console.log("Il conto alla rovescia è terminato.");
    }
}
const id = setInterval(contoAllaRovescia, 1000);
contoAllaRovescia(tempoRimanente)