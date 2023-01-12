btn = document.querySelector("button");

btn.addEventListener("click", (e) => {
  let inputs = Array.from(document.querySelectorAll("input"));
  let body = document.body;
  newP = document.createElement("p");
  newP.setAttribute("id", "result");
  newP.textContent = `${inputs[0].name}: ${inputs[0].value},
                      ${inputs[1].name}: ${inputs[1].value},
                      ${inputs[2].name}: ${inputs[2].value}`;
  body.append(newP);
});
