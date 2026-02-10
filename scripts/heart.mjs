import { createFalling } from "./balloons.mjs";

export function spawnHeart() {
    const heart = createFalling("❤️", "heart");
  
    heart.addEventListener("click", () => {
      clearFalling();
      showValentineMessage();
    });
  }

  function clearFalling() {
    document.querySelectorAll(".falling, .heart")
      .forEach(el => el.remove());
  }
  
  
    
    function showValentineMessage() {
      document.getElementById("valentineOverlay")
        .classList.add("show");
    
      centerBalloon.style.display = "none";
    }