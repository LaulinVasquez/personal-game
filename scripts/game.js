import { spawnBalloons } from "./balloons.mjs";
import { spawnHeart } from "./heart.mjs";

  
  function init(){
    const centerBalloon = document.getElementById("centerBalloon");

    centerBalloon.addEventListener("click", spawnBurst);
    
    function spawnBurst() {
      spawnBalloons(27);
      spawnHeart();
    }
    
    
      
    //   button handler
    
    document.querySelectorAll(".yes").forEach(button => {
        button.addEventListener("click", celebrate);
      });
      
      function celebrate() {
        document.querySelector(".card").innerHTML = "Yay!! 💖💖💖";
      }    
  }

  // start the game!!!
  init()