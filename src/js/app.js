import { storedge } from "./btnEvents";

window.addEventListener("beforeunload", () => {
  document
    .querySelector(".done")
    .querySelectorAll(".item-item")
    .forEach((el) => storedge.done.push(el.textContent));
  document
    .querySelector(".toDo")
    .querySelectorAll(".item-item")
    .forEach((el) => storedge.toDo.push(el.textContent));
  document
    .querySelector(".inProgress")
    .querySelectorAll(".item-item")
    .forEach((el) => storedge.inProgress.push(el.textContent));
  localStorage.setItem("lists", JSON.stringify(storedge));
});

window.addEventListener("load", () => {
  let lists = JSON.parse(localStorage.getItem("lists"));
  let html = "";
  lists.done.forEach((item) => {
        html += `<div class="listItem"><button class="cross deleteBtn"></button><div class="item-item">${item}</div></div>`;
    });
    document.querySelector(".done").insertAdjacentHTML("beforeEnd", html);
    html = "";
    lists.toDo.forEach((item) => {
        html += `<div class="listItem"><button class="cross deleteBtn"></button><div class="item-item">${item}</div></div>`;
    });
    document.querySelector(".toDo").insertAdjacentHTML("beforeEnd", html);
    html = "";
    lists.inProgress.forEach((item) => {
        html += `<div class="listItem"><button class="cross deleteBtn"></button><div class="item-item">${item}</div></div>`;
    });
    document.querySelector(".inProgress").insertAdjacentHTML("beforeEnd", html);
});
