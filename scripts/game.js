const centerBalloon = document.getElementById("centerBalloon");

centerBalloon.addEventListener("click", spawnBurst);

function spawnBurst() {
  spawnBalloons(25);
  spawnHeart();
}

function spawnBalloons(count) {
  for (let i = 0; i < count; i++) {
    createFalling("🎈", "falling");
  }
}

function spawnHeart() {
  const heart = createFalling("❤️", "heart");

  heart.addEventListener("click", () => {
    clearFalling();
    console.log("Heart caught ❤️");
  });
}

function createFalling(icon, className) {
  const el = document.createElement("div");
  el.className = className;
  el.innerHTML = icon;

  el.style.left = Math.random() * 100 + "vw";
  el.style.animationDuration = (2.5 + Math.random()) + "s";

  document.body.appendChild(el);

  setTimeout(() => el.remove(), 4000);

  return el;
}

function clearFalling() {
  document.querySelectorAll(".falling, .heart")
    .forEach(el => el.remove());
}

function spawnHeart() {
    const heart = createFalling("❤️", "heart");
  
    heart.addEventListener("click", () => {
      clearFalling();
      showValentineMessage();
    });
  }
  
  function showValentineMessage() {
    document.getElementById("valentineOverlay")
      .classList.add("show");
  
    centerBalloon.style.display = "none";
  }
  
//   button handler

document.querySelectorAll(".yes").forEach(button => {
    button.addEventListener("click", celebrate);
  });
  
  function celebrate() {
    document.querySelector(".card").innerHTML = "Yay!! 💖💖💖";
  }
  