let btn = document.querySelector("#addTodo");

btn.addEventListener("click", (e) => {
  let input = document.querySelector("input");
  let list = document.querySelector("ul");
  console.log(list);
  let task = document.createElement("li");
  task.textContent = `${input.value}`;
  console.log(input.value);
  list.appendChild(task);
});
