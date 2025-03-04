const container = document.querySelector(".container");
const button = document.getElementById("firework-btn");
function startFirework() {
    // Hide button when clicked
    button.style.display = "none";  
    firework();
}
function firework() {
    const body = document.getElementsByTagName('body')[0];
    body.style.backgroundColor = "black"
    const heading = document.getElementsByTagName('h1')[0]
    heading.innerText = "Firework!"
    createDotRings(50, () => {
        // Second: big sparkle circle is made
        createFireworkBall(() => {
            // Third: sparkles falling one by one
            setTimeout(() => {
                createFireworkSparkle(100);
                createFireworkSparkleTwo(100);
                createFireworkSparkleThree(100);
                createFireworkSparkleFour(100);
                createFireworkSparkleFive(100);
                createFireworkSparkleSix(100);
                // Showing button again after all animations (e.g., after 7 seconds)
                setTimeout(() => {
                    button.style.display = "block";  
                }, 7000); // 
            }, 2100);
        });
    });
}

function createDotRings(num , callback) {
    const screenWidth = window.innerWidth; // Get screen width
    const centerX = screenWidth / 2; // Center X position
    const startY = 50; // Start near the bottom
  for (let i = 0; i < num; i++) {
    const dotsRing = document.createElement("div");
    dotsRing.className = "dots-ring";
    // dotsRing.style.left = `${i * 21}px`;
    // dotsRing.style.bottom = `${i * 21}px`;
     // Center the dots by subtracting half the width (10px since width is 20px)
     dotsRing.style.left = `${centerX - 10}px`; 
     dotsRing.style.bottom = `${startY + i * 20}px`; // Move upwards
    dotsRing.style.animation = `fade 1s ease-in-out ${i * 0.1}s forwards`;
    container.appendChild(dotsRing);
  }
  setTimeout(callback, num * 0.1 * 1000 + 1000);
}
function createFireworkBall(callback) {
  const fireworkBall = document.createElement("div");
  fireworkBall.id = "firework-ball";
  container.appendChild(fireworkBall);

  setTimeout(callback, 500);
}

function createFireworkSparkle(num) {
  for (let i = 0; i < num; i++) {
    const fireworkSparkle = document.createElement("div");
    fireworkSparkle.className = "firework-sparkle";
    fireworkSparkle.style.left = `${i * Math.random() * 40}px`;
    fireworkSparkle.style.bottom = `${i * Math.random() * 50}px`;
    container.appendChild(fireworkSparkle);
  }
}

function createFireworkSparkleTwo(num = 10) {
  for (let i = 0; i < num; i++) {
    const fireworkSparkleTwo = document.createElement("div");
    fireworkSparkleTwo.className = "firework-sparkle-two";
    fireworkSparkleTwo.style.left = `${i * Math.random() * 40}px`;
    fireworkSparkleTwo.style.bottom = `${i * Math.random() * 50}px`;
    container.appendChild(fireworkSparkleTwo);
  }
}

function createFireworkSparkleThree(num = 10) {
  for (let i = 0; i < num; i++) {
    const fireworkSparkleThree = document.createElement("div");
    fireworkSparkleThree.className = "firework-sparkle-three";
    fireworkSparkleThree.style.left = `${i * Math.random() * 40}px`;
    fireworkSparkleThree.style.bottom = `${i * Math.random() * 50}px`;
    container.appendChild(fireworkSparkleThree);
  }
}

function createFireworkSparkleFour(num = 10) {
  for (let i = 0; i < num; i++) {
    const fireworkSparkleFour = document.createElement("div");
    fireworkSparkleFour.className = "firework-sparkle-four";
    fireworkSparkleFour.style.left = `${i * Math.random() * 40}px`;
    fireworkSparkleFour.style.bottom = `${i * Math.random() * 50}px`;
    container.appendChild(fireworkSparkleFour);
  }
}
function createFireworkSparkleFive(num = 10 ) {
  for (let i = 0; i < num; i++) {
    const fireworkSparkleFive = document.createElement("div");
    fireworkSparkleFive.className = "firework-sparkle-five";
    fireworkSparkleFive.style.left = `${i * Math.random() * 40}px`;
    fireworkSparkleFive.style.bottom = `${i * Math.random() * 50}px`;
    container.appendChild(fireworkSparkleFive);
  }
}
function createFireworkSparkleSix(num = 10 ) {
  for (let i = 0; i < num; i++) {
    const fireworkSparkleSix = document.createElement("div");
    fireworkSparkleSix.className = "firework-sparkle-six";
    fireworkSparkleSix.style.left = `${i * Math.random() * 40}px`;
    fireworkSparkleSix.style.bottom = `${i * Math.random() * 50}px`;
    container.appendChild(fireworkSparkleSix);
  }
}
