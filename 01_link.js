function insertHelloWorld() {
  let element = document.createElement("p");
  element.innerHTML = "Hello Word";
  return document.body.appendChild(element);
}
// insertHelloWorld();
module.exports = insertHelloWorld;
