export function spawnBalloons(count) {
    for (let i = 0; i < count; i++) {
      createFalling("🎈", "falling");
    }
  }

export  function createFalling(icon, className) {
    const el = document.createElement("div");
    el.className = className;
    el.innerHTML = icon;
  
    el.style.left = Math.random() * 100 + "vw";
    el.style.animationDuration = (2.5 + Math.random()) + "s";
  
    document.body.appendChild(el);
  
    setTimeout(() => el.remove(), 4000);
  
    return el;
  }