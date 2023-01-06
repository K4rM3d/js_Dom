let btn = Array.from(document.getElementsByTagName("button"));
console.log(btn);

btn.map((element) => (element.style.backgroundColor = "red"));
