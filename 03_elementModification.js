function elementModification() {
  return (document.getElementsByTagName("button")[0].textContent =
    "hello word");
}
elementModification();

module.exports = elementModification;
