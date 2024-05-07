//la classe qui groupe toute les propriete pour un defi
class Challenge {
  constructor(desciption, points, completed, id, parent) {
    this.description = desciption;
    this.points = points;
    this.completed = completed;
    this.id = id;
  }
  update() {
    const divChallenge = document.createElement("div");
    divChallenge.classList.add("challenge");
    divChallenge.id = this.id;
    divChallenge.data = this;
    divChallenge.onclick = enableDisableOnclick;

    this.completed ? divChallenge.classList.add("completed") : null;
    const desciptionLabel = document.createElement("p");
    desciptionLabel.innerText = this.description;
    divChallenge.appendChild(desciptionLabel);

    const pointsLabel = document.createElement("p");
    pointsLabel.innerText = this.points;
    divChallenge.appendChild(pointsLabel);

    return divChallenge;
  }
}

function enableDisableOnclick() {
  this.data.completed = !this.data.completed;
  this.data.completed
    ? this.classList.add("completed")
    : this.classList.remove("completed");
}
