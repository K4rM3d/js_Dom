function elementModification() {
  return (document.getElementsByTagName("button")[0].textContent =
    "hello world");
}
elementModification();

module.exports = elementModification;
