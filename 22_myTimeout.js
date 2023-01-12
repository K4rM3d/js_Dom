let btn = document.querySelector("button");

btn.addEventListener("click", (e) => {
  let newP = document.createElement("p");
  newP.textContent = "add-me";

  setTimeout(() => {
    document.body.append(newP);
  }, 2000);
});
