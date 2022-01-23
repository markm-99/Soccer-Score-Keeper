const p1Button = document.querySelector("#p1Button");
const p2Button = document.querySelector("#p2Button");
const resetButton = document.querySelector("#reset");
const p1Display = document.querySelector("#p1Display");
const p2Display = document.querySelector("#p2Display");
const winningScoreSelect = document.querySelector("#playto");
let p1Score = 0;
let p2Score = 0;
// still playing game. When someone hits 5, set isGameOver to true.
let winningScore = 5;
let isGameOver = false;
// let reset = "";
p1Button.addEventListener("click", function () {
  // if (p1Score !== winningScore)
  if (!isGameOver) {
    // when clicked, add 1, then update display
    p1Score++;
    if (p1Score === winningScore) {
      isGameOver = true;
      p1Display.classList.add("has-text-success");
      p2Display.classList.add("has-text-danger");
      p1Button.disabled = true;
      p2Button.disabled = true;
    }
    // set the display equal to the score of each player
    p1Display.textContent = p1Score;
  }
});
p2Button.addEventListener("click", function () {
  if (!isGameOver) {
    // when clicked, add 1, then update display
    p2Score++;
    if (p2Score === winningScore) {
      isGameOver = true;
      p2Display.classList.add("has-text-success");
      p1Display.classList.add("has-text-danger");
      p1Button.disabled = true;
      p2Button.disabled = true;
    }
    // set the display equal to the score of each player
    p2Display.textContent = p2Score;
  }
})

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
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = 0;
  p2Display.textContent = 0;
  //   remove the score classes (color changes) after reset button clicked
  p1Display.classList.remove("has-text-success", "has-text-danger");
  p2Display.classList.remove("has-text-success", "has-text-danger");
  p1Button.disabled = false;
  p2Button.disabled = false;
}
