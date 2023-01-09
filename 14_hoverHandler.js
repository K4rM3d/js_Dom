let hoverMe = document.querySelector("#hoverme");

hoverMe.addEventListener("mouseover", (e) => {
  let content = document.querySelector(".content");
  let newP = document.createElement("p");
  newP.setAttribute("id", "result");
  newP.textContent = "hovered";
  content.appendChild(newP);
});
