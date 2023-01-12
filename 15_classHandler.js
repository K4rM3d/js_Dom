let btn = document.querySelector("#toggle");
console.log(btn);
btn.addEventListener("click", (e) => {
  let divOpen = document.querySelector("#modal");

  divOpen.classList.toggle("is-open");
});
