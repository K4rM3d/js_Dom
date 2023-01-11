let btn = document.querySelector("#addTodo");

btn.addEventListener("click", (e) => {
  let input = document.querySelector("input");
  let list = document.querySelector("ul");
  let task = document.createElement("li");
  let btnDelete = document.createElement("button");

  task.textContent = `${input.value}`;
  btnDelete.textContent = "Delete";
  list.appendChild(task);
  list.appendChild(btnDelete);
  console.log(list);

  btnDelete.addEventListener("click", (e) => {
    btnDelete.previousElementSibling.remove();
    btnDelete.remove();
  });
});
