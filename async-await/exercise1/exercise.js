function caricamentoDati() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Questi sono i dati ottenuti dalla fonte asincrona.");
    }, 2000);
  });
}

async function ottieniDati() {
  try {
    console.log("Caricamento dati...");
    const data = await caricamentoDati();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

ottieniDati();
