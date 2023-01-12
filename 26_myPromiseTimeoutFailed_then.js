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

btnSuccess.addEventListener("click", () => {
  let newP = document.createElement("p");
  newP.textContent = "sucess";
  newP.setAttribute("class", "sucess");
  sleepThrow(2000, true).then(() => document.body.appendChild(newP));
});

btnFail.addEventListener("click", () => {
  let newP = document.createElement("p");
  newP.textContent = "error";
  newP.setAttribute("class", "error");
  sleepThrow(2000, false).catch(() => document.body.appendChild(newP));
});
