export default class DragDrop {
  constructor() {
    this.cells = document.querySelectorAll(".js-cell");
    this.theCell = null;
    this.check = false;
    this.lastHovered = null;
  }

  dragStart(e) {
    if (!e.target.classList.contains("js-card")) return;
    this.theCell = e.target.closest(".js-card");
    setTimeout(() => {
      e.target.closest(".js-card").classList.add("hide");
    }, 0);
  }

  dragEnd(e) {
    if (!e.target.classList.contains("js-card")) return;
    e.target.classList.remove("hide");
  }

  dragOver(evt) {
    evt.preventDefault();
  }

  dragEnter(evt) {
    if (!evt.target.classList.contains("column")) return;
    evt.preventDefault();
    evt.target.classList.add("hovered");
  }
//перетаскивание элемента
  dragMove(e) {
    let hovered = document.elementFromPoint(e.clientX, e.clientY);
    let card = hovered.closest(".js-card");
    if (card && card !== this.theCell) {
      this.lastHovered = card;
      card.classList.add("moved");
      if (this.lastHovered && card !== this.lastHovered) {
      card.classList.remove("moved");
      }
    }     
  }
  
  dragLeave(evt) {
    if (!evt.target.classList.contains("column")) return;
    evt.target.classList.remove("hovered");
  }

  dragDrop(e) {
    if (!e.target.classList.contains("column")) return;
    const column = e.target;
    column.append(this.theCell);
    column.classList.remove("hovered");
    this.theCell = null;
  }
}
