const sleepThrow = (millisecondes, condition) => {
  return new Promise((resolve, reject) => {
    if (condition === true) {
      setTimeout(() => resolve("sucess"), millisecondes);
    } else {
      setTimeout(() => reject("Fail"), millisecondes);
    }
  });
};

let btnSuccess = document.querySelector("#success");
let btnFail = document.querySelector("#fail");

btnSuccess.addEventListener("click", async () => {
  let newP = document.createElement("p");
  newP.textContent = "sucess";
  newP.setAttribute("class", "sucess");
  try {
    await sleepThrow(2000, true);
    document.body.appendChild(newP);
  } catch {
    console.log("error");
  }
});

btnFail.addEventListener("click", async () => {
  let newP = document.createElement("p");
  newP.textContent = "error";
  newP.setAttribute("class", "error");
  try {
    await sleepThrow(2000, false);
  } catch {
    document.body.appendChild(newP);
  }
});
