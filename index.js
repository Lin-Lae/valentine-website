const noButton = document.getElementById("no");
const yesButton = document.getElementById("yes");

noButton.addEventListener("mouseover", () => {
  const buttonWidth = noButton.offsetWidth;
  const buttonHeight = noButton.offsetHeight;

  const maxX = window.innerWidth - buttonWidth - 20;
  const maxY = window.innerHeight - buttonHeight - 20;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noButton.style.position = "absolute";
  noButton.style.left = x + "px";
  noButton.style.top = y + "px";
});

function createConfetti() {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
  
    const colors = ["#ff4d6d", "#ffd166", "#06d6a0", "#118ab2", "#c77dff"];
    confetti.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];
  
    confetti.style.left = Math.random() * window.innerWidth + "px";
  
    document.body.appendChild(confetti);
  
    setTimeout(() => {
      confetti.remove();
    }, 3000);
  }  

yesButton.addEventListener("click", () => {
  document.body.innerHTML = `

    <div 
      class="tenor-gif-embed"
      data-postid="18266119187889292563"
      data-share-method="host"
      data-aspect-ratio="1.08261"
      data-width="20%"
      style="margin: 20px auto;">
    </div>

    <h1 style="text-align:center;">
      I know you'll say yes! 🥹🥰
    </h1>
  `;

  const script = document.createElement("script");
  script.src = "https://tenor.com/embed.js";
  script.async = true;
  document.body.appendChild(script);

  setInterval(createConfetti, 100);
});

