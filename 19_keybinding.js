document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowDown") {
    let square = document.querySelector("#square");
    let squareTop = square.style.top ? square.style.top : "0px";

    squareTop = squareTop.replace("px", "");
    squareTop = parseInt(squareTop);
    square.style.top = `${squareTop + 10}px`;
  }

  if (e.key === "ArrowUp") {
    let square = document.querySelector("#square");
    let squareTop = square.style.top ? square.style.top : "0px";

    squareTop = squareTop.replace("px", "");
    squareTop = parseInt(squareTop);
    square.style.top = `${squareTop - 10}px`;
  }

  if (e.key === "ArrowRight") {
    let square = document.querySelector("#square");
    let squareLeft = square.style.left ? square.style.left : "0px";

    squareLeft = squareLeft.replace("px", "");
    squareLeft = parseInt(squareLeft);
    square.style.left = `${squareLeft + 10}px`;
  }

  if (e.key === "ArrowLeft") {
    let square = document.querySelector("#square");
    let squareLeft = square.style.left ? square.style.left : "0px";

    squareLeft = squareLeft.replace("px", "");
    squareLeft = parseInt(squareLeft);
    square.style.left = `${squareLeft - 10}px`;
  }
});
