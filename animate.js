var slider = document.getElementById("myRange");
var levelOne = document.getElementById("levelOne");
var levelTwo = document.getElementById("levelTwo");
var levelThree = document.getElementById("levelThree");
var levelFour = document.getElementById("levelFour");

slider.oninput = function() {
  if (this.value < 25) {
    levelOne.classList.remove("hidden");
    levelTwo.classList.add("hidden");
    levelThree.classList.add("hidden");
    levelFour.classList.add("hidden");
  } else if (this.value >= 25 && this.value < 50) {
    levelOne.classList.add("hidden");
    levelTwo.classList.remove("hidden");
    levelThree.classList.add("hidden");
    levelFour.classList.add("hidden");
  } else if (this.value >= 50 && this.value < 75) {
    levelOne.classList.add("hidden");
    levelTwo.classList.add("hidden");
    levelThree.classList.remove("hidden");
    levelFour.classList.add("hidden");
  } else if (this.value >= 75) {
    levelOne.classList.add("hidden");
    levelTwo.classList.add("hidden");
    levelThree.classList.add("hidden");
    levelFour.classList.remove("hidden");
  }
};