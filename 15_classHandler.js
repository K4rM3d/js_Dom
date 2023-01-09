let btn = document.querySelector("#toggle");
console.log(btn);
btn.addEventListener("click", (e) => {
  let divOpen = document.querySelector("#modal");
  if (divOpen.className === "is-open") {
    divOpen.classList.remove("is-open");
  } else {
    divOpen.setAttribute("class", "is-open");
  }
});
