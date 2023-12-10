function caricaModulo(modulo) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Il modulo ${modulo} è stato caricato.`);
    }, 2000);
  });
}

async function lanciaVeicoloSpaziale() {
  try {
    const moduloA = await caricaModulo("A");
    console.log(moduloA);

    const moduloB = await caricaModulo("B");
    console.log(moduloB);

    const moduloC = await caricaModulo("C");
    console.log(moduloC);

    setTimeout(() => {
      console.log("Veicolo spaziale pronto per il lancio!");
    }, 1000);
  } catch (errore) {
    console.error(
      "Si è verificato un errore durante il caricamento del modulo:",
      errore
    );
  }
}

lanciaVeicoloSpaziale();
