let input = document.querySelector("#fontsize");

input.addEventListener("input", (e) => {
  let fontsized = Array.from(document.querySelectorAll(".controlled_fontsize"));
  fontsized.map((element) => (element.style.fontSize = `${input.value}px`));
});
