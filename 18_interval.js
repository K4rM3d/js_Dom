setInterval((e) => {
  let body = document.body;
  let newP = document.createElement("p");
  let date = new Date();
  newP.textContent = `${date.getDate()}/
                      ${date.getMonth() + 1}/
                      ${date.getFullYear()}
                      ${date.getHours()}:
                      ${date.getMinutes()}:
                      ${date.getSeconds()}`;
  body.append(newP);
}, 1000);
