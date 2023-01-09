let btn = document.querySelectorAll(".btn");
let secondary = document.querySelectorAll(".secondary");
let warning = document.querySelectorAll(".warning");
let danger = document.querySelectorAll(".danger");
[...btn].map((element) => (element.style.backgroundColor = "blue"));
[...secondary].map((element) => (element.style.backgroundColor = "grey"));
[...warning].map((element) => (element.style.backgroundColor = "yellow"));
[...danger].map((element) => (element.style.backgroundColor = "red"));

console.log(btn);
