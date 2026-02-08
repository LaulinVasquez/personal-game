

const centerBalloon = document.getElementById("centerBalloon");

centerBalloon.addEventListener("click", startGame);

function startGame() {
  spawnBalloons(100);
}

function spawnBalloons(count) {
  for (let i = 0; i < count; i++) {
    createBalloon();
  }
}

function createBalloon() {
  const balloon = document.createElement("div");
  balloon.className = "falling";
  balloon.innerHTML = "🎈";

  balloon.style.left = Math.random() * 100 + "vw";
  balloon.style.animationDuration = (2 + Math.random() * 3) + "s";

  document.body.appendChild(balloon);

  setTimeout(() => {
    balloon.remove();
  }, 4000);
}
