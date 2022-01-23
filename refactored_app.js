// store them as properties of an object, not separate lines of components
const t1 = {
  score: 0,
  button: document.querySelector("#t1Button"),
  display: document.querySelector("#t1Display"),
};
const t2 = {
  score: 0,
  button: document.querySelector("#t2Button"),
  display: document.querySelector("#t2Display"),
};
const resetButton = document.querySelector("#reset");
const winningScoreSelect = document.querySelector("#playto");
// still playing game. When someone hits 5, set isGameOver to true.
let winningScore = 5;
let isGameOver = false;
function updateScores(team, opponent) {
  if (!isGameOver) {
    // when clicked, add 1, then update display
    team.score++;
    if (team.score === winningScore) {
      isGameOver = true;
      // give the colors to the team and opponent
      team.display.classList.add("has-text-success");
      opponent.display.classList.add("has-text-danger");
      team.button.disabled = true;
      opponent.button.disabled = true;
    }
    // set the display equal to the score of each player
    team.display.textContent = team.score;
  }
  // let reset = "";
  // if (t1Score !== winningScore)
}
t1.button.addEventListener("click", function () {
  // let t1 be player and t2 be opponent
  updateScores(t1, t2);
});
t2.button.addEventListener("click", function () {
  // let t2 be player and t1 be opponent
  updateScores(t2, t1);
  // set the display equal to the score of each player
});
// lets you choose what the winning score should be
winningScoreSelect.addEventListener("change", function () {
  // this.value gives us access to the value and refers to the specific object we need to reference
  // this.value = the value we manually select
  // we want to convert the string '3-10' to a number with parseInt()
  winningScore = parseInt(this.value);
  //   execute the reset function after winningScore is reached
  reset();
});

// will reset the game when clicked
resetButton.addEventListener("click", reset);
function reset() {
  isGameOver = false;
  for (let t of [t1, t2]) {
    t.score = 0;
    t.display.textContent = 0;
    //   remove the score classes (color changes) after reset button clicked
    t.display.classList.remove("has-text-success", "has-text-danger");
    // disable buttons when game finished
    t.button.disabled = false;
  }
}
