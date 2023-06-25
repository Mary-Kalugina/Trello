export default class DragDrop {
  constructor() {;
    this.cells = document.querySelectorAll(".js-cell");
    this.theCell; 
    this.check = false;
}
   
    dragStart (e) {
      setTimeout(() => {
        e.target.closest(".js-card").classList.add("hide");
        this.theCell = e.target.closest(".js-card");
      }, 0);
    };
  
    dragEnd (e) {
      e.target.closest(".js-card").classList.remove("hide");
    };
  
    dragOver (evt) {
      evt.preventDefault();
    };
  
    dragEnter(evt) {
      evt.preventDefault();
      this.classList.add("hovered");
    };
  
    dragLeave () {
      this.classList.remove("hovered");
    };
  
    dragDrop () {
      console.log(this.theCell);
      this.append(this.theCell);
      this.classList.remove("hovered");
      this.theCell = null;
    };
    
    addListenerToCells() {
        this.cells.forEach((cell) => {
            cell.addEventListener("dragover", this.dragOver);
            cell.addEventListener("dragenter", this.dragEnter);
            cell.addEventListener("dragleave", this.dragLeave);
            cell.addEventListener("drop", this.dragDrop);
        });
    }
    
    addListenerToCards() {
        this.cards = document.querySelectorAll(".js-card");
        this.cards.forEach((card) => {
            card.addEventListener("dragstart", this.dragStart);
            card.addEventListener("dragend", this.dragEnd);
        });
        this.check = true;
    }
}
