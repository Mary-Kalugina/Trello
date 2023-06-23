const { doc } = require("prettier");

const listContainer = document.querySelector(".listContainer");
export const storedge = { done: [], toDo: [], inProgress: [] };

listContainer.addEventListener("click", (e) => {
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
  let html = `<div class="createWindow">
  <textarea class="input"></textarea>
    <button class="saveBtn">Add Card</button>
    <button class="cross closeWindow"></button></div>`;
  column.insertAdjacentHTML("beforeEnd", html);
}

function saveNewItem(e) {
  let inputValue = e.target.previousElementSibling.value;
  if (!inputValue) {
    return;
  }
  let column = e.target.closest(".column");
  let html = `<div class="listItem"><button class="cross deleteBtn"></button><div class="item-item">${inputValue}</div></div>`;
  column.insertAdjacentHTML("beforeEnd", html);
  closeWindow(e);
}

function closeWindow(e) {
  let parent = e.target.closest(".column");
  parent.querySelector(".addItem").classList.remove("hidden");
  e.target.closest(".createWindow").remove();
}

listContainer.addEventListener("mouseover", (e) => {
  if (e.target.classList.contains("listItem")) {
    let deleteBtn = e.target.querySelector(".deleteBtn");
    deleteBtn.style.opacity = 1;
    deleteBtn.visibility = "visible";
  }
});