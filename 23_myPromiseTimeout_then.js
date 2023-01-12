const sleep = (millisecondes) => {
  return new Promise((resolve) => setTimeout(resolve, millisecondes));
};
let btn = document.querySelector("button");

btn.addEventListener("click", (e) => {
  let newP = document.createElement("p");
  newP.textContent = "add-me";

  sleep(2000).then(() => {
    document.body.append(newP);
  });
});
