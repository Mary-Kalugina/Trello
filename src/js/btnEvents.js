const { doc } = require("prettier");
import DragDrop from "./dragAndDrop";
export const storedge = { done: [], toDo: [], inProgress: [] };

let dragDrop = new DragDrop();
const wrapper = document.querySelector(".wrapper");

wrapper.addEventListener("click", (e) => {
  if (e.target.classList.contains("deleteBtn")) {
    e.target.closest(".listItem").remove();
    return;
  }
  if (e.target.classList.contains("addItem")) {
    if (document.querySelector(".createWindow")) {
      return;
    }
    e.target.classList.add("hidden");
    openCreateWindow(e);
    return;
  }
  if (e.target.classList.contains("saveBtn")) {
    saveNewItem(e);
    return;
  }
  if (e.target.classList.contains("closeWindow")) {
    closeWindow(e);
    return;
  }
});

function openCreateWindow(e) {
  let column = e.target.closest(".column");
  let html = `<li class="createWindow list__card">
  <textarea class="input"></textarea>
    <button class="saveBtn">Add Card</button>
    <button class="cross closeWindow"></button></li>`;
  column.insertAdjacentHTML("beforeEnd", html);
}

function saveNewItem(e) {
  let inputValue = e.target.previousElementSibling.value;
  if (!inputValue) {
    return;
  }
  let column = e.target.closest(".column");
  let html = `<li class="listItem list__card js-card"  draggable="true"><button class="cross deleteBtn"></button><div class="item-item">${inputValue}</div></li>`;
  column.insertAdjacentHTML("beforeEnd", html);
  closeWindow(e);

  if (!dragDrop.check) {
    dragDrop.addListenerToCards();
  }
}

function closeWindow(e) {
  let parent = e.target.closest(".column");
  parent.querySelector(".addItem").classList.remove("hidden");
  e.target.closest(".createWindow").remove();
}
