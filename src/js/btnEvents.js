let listContainer = document.querySelector(".listContainer");

listContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("deleteBtn")) {
    e.target.closest("listItem").remove();
    return;
  }
  if (e.target.classList.contains("addItem")) {
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
  console.log();
  let html = `<tr class="createWindow"><td>
    <input class="input" type="text">
    <button class="saveBtn">Add Card</button>
    <button class="closeWindow"></button>
  </td></tr>`;
  column.firstElementChild.innerHTML += html;
}

function saveNewItem(e) {
  let input = e.target.previousElementSibling;
  if (!input.value) {
    return;
  }
  let column = e.target.closest(".column");
  let html = `<tr class="listItem"><td><div class="item-item"><p>${input.value}</p></div></td></tr>`;
  column.firstElementChild.innerHTML += html;
  closeWindow(e);
}

function closeWindow(e) {
  let window = e.target.closest(".createWindow");
  console.log(window)
//   не работает
//   document
//     .querySelectorAll(".addItem")
//     .forEach((btn) => btn.classList.remove("hidden"));
    e.target.closest(".createWindow").remove();
}

listContainer.addEventListener("mouseover", (e) => {
  if (e.target.classList.contains("listItem")) {
    let deleteBtn = e.target.querySelector(".deleteBtn");
    deleteBtn.style.opacity = 1;
    deleteBtn.visibility = "visible";
  }
});
