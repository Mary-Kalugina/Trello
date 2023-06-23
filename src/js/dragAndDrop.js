let listContainer = document.querySelector(".listContainer");
let actualElement;

listContainer.addEventListener("dragover", (e) => {
  e.preventDefault();
});

listContainer.addEventListener("drop", (e) => {
  e.preventDefault();
});

const onMouseOver = (e) => {
  actualElement.style.top = e.clientY + "px";
  actualElement.style.left = e.clientX + "px";
};

const onMouseUp = (e) => {
  if (!e.target.closest("listItem")) return;
  const mouseUpItem = e.target;

  listContainer.insertBefore(actualElement, mouseUpItem);

  actualElement.classList.remove("dragged");
  actualElement = undefined;

  document.documentElement.removeEventListener("mouseup", onMouseUp);
  document.documentElement.removeEventListener("mouseover", onMouseOver);
};

listContainer.addEventListener("mousedown", (e) => {
    if (!e.target.closest("listItem")) return;

  e.preventDefault();

  actualElement = e.target;

  actualElement.classList.add("dragged");

  document.documentElement.addEventListener("mouseup", onMouseUp);
  document.documentElement.addEventListener("mouseover", onMouseOver);
});
