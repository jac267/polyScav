function start() {
  //slice 1 car le premier element est toujours null
  lsJSONChallenges = JSON.parse(localStorage["challengesData"]);
  const lsChallenges = [];
  for (JSONChallenge in lsJSONChallenges) {
    item = lsJSONChallenges[JSONChallenge];
    lsChallenges.push(
      new Challenge(
        item["description"],
        item["points"],
        item["completed"],
        JSONChallenge
      )
    );
  }

  container = new ChallengesContainer(
    lsChallenges,
    document.getElementById("container")
  );

  container.update();
  document.getElementById("save").data = container;
}
