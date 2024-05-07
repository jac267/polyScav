//la classe qui groupe toute les propriete pour un defi
class Challenge {
  constructor(desciption, points, completed) {
    this.desciption = desciption;
    this.points = points;
    this.completed = completed;
  }
  update() {
    const divChallenge = document.createElement("div");
    divChallenge.classList.add("challenge");
    this.completed ? divChallenge.classList.add("completed") : null;

    const desciptionLabel = document.createElement("p");
    desciptionLabel.innerText = this.desciption;
    divChallenge.appendChild(desciptionLabel);

    const pointsLabel = document.createElement("p");
    pointsLabel.innerText = this.points;
    divChallenge.appendChild(pointsLabel);

    return divChallenge;
  }
}
