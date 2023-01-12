// Même principe que l’exercice précédent, utilisez une nouvelle fonction “sleep”
// pour effectuer la même action (ajout d’un
// élément p après 2 secondes) a la suite du click sur le bouton.
// Pour cela, vous devrez utiliser les async await

const sleep = (millisecondes) => {
  return new Promise((resolve) => setTimeout(resolve, millisecondes));
};

let btn = document.querySelector("button");
btn.addEventListener("click", async () => {
  let newP = document.createElement("p");
  newP.textContent = "add-me";

  await sleep(2000);
  document.body.append(newP);
});
