import { storedge } from "./btnEvents";
import DragDrop from "./dragAndDrop";
let dragDrop = new DragDrop();

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
  if (!lists) return;
  let html = "";
  lists.done.forEach((item) => {
    html += `<li class="listItem list__card js-card"  draggable="true"><button class="cross crossCard"></button><div class="item-item">${item}</div></li>`;
  });
  document.querySelector(".done").insertAdjacentHTML("beforeEnd", html);
  html = "";
  lists.toDo.forEach((item) => {
    html += `<li class="listItem list__card js-card"  draggable="true"><button class="cross crossCard"></button><div class="item-item">${item}</div></li>`;
  });
  document.querySelector(".toDo").insertAdjacentHTML("beforeEnd", html);
  html = "";
  lists.inProgress.forEach((item) => {
    html += `<li class="listItem list__card js-card"  draggable="true"><button class="cross crossCard"></button><div class="item-item">${item}</div></li>`;
  });
  document.querySelector(".inProgress").insertAdjacentHTML("beforeEnd", html);
});

//listen columns
document.body.addEventListener("dragover", (e) => dragDrop.dragOver(e));
document.body.addEventListener("dragenter", (e) => dragDrop.dragEnter(e));
document.body.addEventListener("dragleave", (e) => dragDrop.dragLeave(e));
document.body.addEventListener("drag", (e) => dragDrop.dragMove(e));
document.body.addEventListener("drop", (e) => dragDrop.dragDrop(e));

//listen cards
document.body.addEventListener("dragstart", (e) => dragDrop.dragStart(e));
document.body.addEventListener("dragend", (e) => dragDrop.dragEnd(e));