function tagSelector() {
  let btn = document.getElementsByTagName("button");
  return btn[0];
}
console.log(tagSelector()); // element>button
console.log(tagSelector().innerHTML); //"hello"
module.exports = tagSelector;
