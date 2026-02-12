import { spawnBalloons, spawnBalloonGroup ,createBalloon} from "./balloons.mjs";
import { spawnHeart } from "./heart.mjs";

  
  function init(){
    const centerBalloon = document.getElementById("centerBalloon");
    const gameArea = document.querySelector(".game-area");

    centerBalloon.addEventListener("click", spawnBurst);
    
    function spawnBurst() {
    //   spawnBalloonGroup(gameArea, 12);
      spawnBalloons(27)
      spawnHeart();
    }
    
    
      
    //   button handler
    
    document.querySelectorAll(".yes").forEach(button => {
        button.addEventListener("click", celebrate);
      });
      
      function celebrate() {
        document.querySelector(".card").innerHTML = "SI!! Te amo mi amorcito bello preciosa, Feliz 10 meses mi vida :D💖💖💖";
      }    
  }

  // start the game!!!
  init()