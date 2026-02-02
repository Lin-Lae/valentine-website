<<<<<<< HEAD
const noButton = document.getElementById("no");
const yesButton = document.getElementById("yes");

noButton.addEventListener("mouseover", () => {
  const x = Math.random() * 300;
  const y = Math.random() * 300;

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
  document.body.innerHTML = "<h1>YAYYY! 🥹🥰</h1>";
  setInterval(createConfetti, 100);
});
=======
const noButton = document.getElementById("no");
const yesButton = document.getElementById("yes");

noButton.addEventListener("mouseover", () => {
  const x = Math.random() * 300;
  const y = Math.random() * 300;

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
  document.body.innerHTML = "<h1>YAYYY! 🥹🥰</h1>";
  setInterval(createConfetti, 100);
});
>>>>>>> 53223f9 (Add GIF)
