const noBtn = document.getElementById("noBtn");
const denyBtn = document.getElementById("denyBtn");

noBtn.addEventListener("click", moveNoButton);
denyBtn.addEventListener("click", moveDenyButton);

function moveNoButton() {
  noBtn.style.position = "absolute";
  noBtn.style.top = Math.random() * 80 + "%";
  noBtn.style.left = Math.random() * 80 + "%";
}

function moveDenyButton() {
  denyBtn.style.position = "absolute";
  denyBtn.style.top = Math.random() * 80 + "%";
  denyBtn.style.left = Math.random() * 80 + "%";
}

function startLove() {
  document.getElementById("page1").classList.add("hidden");
  document.getElementById("page2").classList.remove("hidden");
  document.getElementById("bgMusic").play();
}

function nextPage() {
  document.getElementById("page2").classList.add("hidden");
  document.getElementById("page3").classList.remove("hidden");
}

function proposalPage() {
  document.getElementById("page3").classList.add("hidden");
  document.getElementById("page4").classList.remove("hidden");
}

function finalPage() {
  document.getElementById("page4").classList.add("hidden");
  document.getElementById("page5").classList.remove("hidden");
}

document.querySelectorAll('.flip-card').forEach(card => {
  card.addEventListener('click', function () {
    this.classList.toggle('flipped');
  });
});

function partyPopper() {
  confetti({
    particleCount: 200,
    spread: 120,
    origin: { y: 0.6 }
  });
}

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = Math.random() * window.innerWidth + 'px';
  heart.textContent = '❤️';
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

// call every 300ms to create hearts continuously
setInterval(createHeart, 300);
