function insertHelloWorld() {
  let element = document.createElement("p");
  element.innerHTML = "Hello World";
  return document.body.appendChild(element);
}
console.log(insertHelloWorld());
module.exports = insertHelloWorld;
