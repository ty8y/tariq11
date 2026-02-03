const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const video = document.getElementById("mainVideo");

let scale = 1;

// --- Magnetic grow effect for YES button ---
document.addEventListener("mousemove", (e) => {
  const rect = yesBtn.getBoundingClientRect();
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  const distance = Math.hypot(centerX - mouseX, centerY - mouseY);

  if (distance < 150) { // threshold for interaction
    const newScale = 1 + (150 - distance) / 500; // closer → bigger
    yesBtn.style.transform = `scale(${newScale})`;
  } else {
    yesBtn.style.transform = `scale(1)`;
  }
});

// --- NO button dodging effect ---
noBtn.addEventListener("mouseenter", () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

// --- NO button click enlarges YES button ---
noBtn.addEventListener("click", () => {
  scale += 0.25;
  yesBtn.style.transform = `scale(${scale})`;
});

// --- YES button click triggers fireworks ---
yesBtn.addEventListener("click", () => {
  video.src = "fireworks.mp4";
  video.style.display = "block";
  video.loop = false;
  video.volume = 1;   // make sure audio is on
  video.muted = false;
  video.play();

  document.querySelector("h1").innerText = " Thanks! :)";

  yesBtn.style.display = "none";
  noBtn.style.display = "none";
});

