let btn = document.querySelector("#addTodo");

btn.addEventListener("click", (e) => {
  let input = document.querySelector("input");
  let list = document.querySelector("ul");
  let task = document.createElement("li");

  task.textContent = `${input.value}`;
  list.appendChild(task);
});
