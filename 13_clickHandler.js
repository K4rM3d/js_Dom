let btn = document.querySelector("button");
btn.addEventListener("click", (e) => {
  let content = document.querySelector(".content");
  let p = document.createElement("p");
  p.setAttribute("id", "result");
  p.textContent = "clicked";
  content.appendChild(p);
});
