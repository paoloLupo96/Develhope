let engram = {
  name: "Johnny",
  surname: "",
  nickname: "Silverhand",
  age: 34,
  dateOfBirth: "16/November/1988",
  dateOfDeath: "20/August/2023",
  engramLocation: "Arasaka Relic 2.0 biochip",
  engramHost: "V",
  residence: "Night City",
  cyberware: "Chromed cyberarm",
  occupation: "ex-soldier, musician",
};

function installEngram(engramProfile) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (engramProfile !== undefined && engram.engramHost == "V") {
        resolve(engramProfile);
      } else reject("Errore irreversibile: sovrascrizione neurale fallita!");
    }, 2077);
  });
}

installEngram(engram)
  .then((data) => {
    console.log(
      "Sovrascrizione neurale riuscita. Engramma installato:",
      data,
      "ATTENZIONE: la rimozione forzata del biochip potrebbe comportare una morte immediata."
    );
  })
  .catch((error) => console.log(error));

//È stato divertente.
