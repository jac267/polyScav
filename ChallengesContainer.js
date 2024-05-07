//la classe qui groupe toutes les defis
class ChallengesContainer {
  constructor(lsChallenges, htmlElement) {
    this.lsChallenges = lsChallenges;
    this.htmlElement = htmlElement;
  }

  update() {
    this.htmlElement.innerHTML = "";
    for (const challenge of this.lsChallenges) {
      this.htmlElement.appendChild(challenge.update());
    }
  }
}

