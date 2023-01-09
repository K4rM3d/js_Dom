document.addEventListener("scroll", (e) => {
  let body = document.body;
  let newP = document.createElement("p");
  newP.textContent = Date();
  body.append(newP);
});
