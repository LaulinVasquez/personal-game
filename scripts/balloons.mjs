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


// This is to create balloons to spawn and move into different directions

export function createBalloon(container) {
  const balloon = document.createElement("div");
  balloon.classList.add("balloon");

  // Initial position
  let x = Math.random() * window.innerWidth;
  let y = -100;

  // ✨ Game feel values
  const fallSpeed = Math.random() * 1.5 + 1.5; 
  const driftX = Math.random() * 0.8 - 0.4;    

  function animate() {
    y += fallSpeed;
    x += driftX;

    balloon.style.transform = `translate(${x}px, ${y}px)`;

    // Remove if off screen
    if (y < window.innerHeight + 100) {
      requestAnimationFrame(animate);
    } else {
      balloon.remove();
    }
  }

  container.appendChild(balloon);
  animate();

  return balloon;
}


export function spawnBalloonGroup(container, count = 10) {
  const balloons = [];

  for (let i = 0; i < count; i++) {
    const balloon = createBalloon(container);
    balloons.push(balloon);
  }

  return balloons;
}
