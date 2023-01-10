document.addEventListener("keydown", (e) => {
  let square = document.querySelector("#square");

  // Recupere la valeur de la possition top du square en entier
  let squareTop = square.style.top ? square.style.top : "0px";
  squareTop = squareTop.replace("px", "");
  squareTop = parseInt(squareTop);

  // Recupere la valeur de la possition left du square en entier
  let squareLeft = square.style.left ? square.style.left : "0px";
  squareLeft = squareLeft.replace("px", "");
  squareLeft = parseInt(squareLeft);

  if (e.key === "ArrowDown") {
    square.style.top = `${squareTop + 10}px`;
  }

  if (e.key === "ArrowUp") {
    square.style.top = `${squareTop - 10}px`;
  }

  if (e.key === "ArrowRight") {
    square.style.left = `${squareLeft + 10}px`;
  }

  if (e.key === "ArrowLeft") {
    square.style.left = `${squareLeft - 10}px`;
  }
});
