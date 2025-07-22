function toggleMenu() {
  const nav = document.getElementById('navbar');
  nav.classList.toggle('show');
}

const typingText = document.querySelector('.typing-text');
const words = ["Full-Stack Developer", "Problem Solver", "Tech Enthusiast"];
let wordIndex = 0;
let charIndex = 0;
let typingDelay = 100;
let erasingDelay = 50;
let newWordDelay = 2000;

function type() {
  if (charIndex < words[wordIndex].length) {
    typingText.textContent += words[wordIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    setTimeout(erase, newWordDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    typingText.textContent = words[wordIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    wordIndex++;
    if (wordIndex >= words.length) wordIndex = 0;
    setTimeout(type, typingDelay);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (words.length) setTimeout(type, newWordDelay + 250);
});
