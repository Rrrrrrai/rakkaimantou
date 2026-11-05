const overlay = document.getElementById("letterOverlay");
const openButton = document.getElementById("openEnvelope");
const closeButton = document.getElementById("closeEnvelope");

let openTimer;
let closeTimer;

function openLetter() {
  clearTimeout(openTimer);
  clearTimeout(closeTimer);

  overlay.classList.remove("opened");
  overlay.classList.add("active");
  overlay.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";

  // Let the envelope arrive in the middle before opening its flap.
  openTimer = setTimeout(() => {
    overlay.classList.add("opened");
  }, 650);
}

function closeLetter() {
  clearTimeout(openTimer);
  clearTimeout(closeTimer);

  overlay.classList.remove("opened");

  // Hide the overlay after the letter has settled back into the envelope.
  closeTimer = setTimeout(() => {
    overlay.classList.remove("active");
    overlay.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }, 650);
}

openButton.addEventListener("click", openLetter);
closeButton.addEventListener("click", closeLetter);

overlay.addEventListener("click", (event) => {
  if (event.target === overlay && overlay.classList.contains("opened")) {
    closeLetter();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && overlay.classList.contains("active")) {
    closeLetter();
  }
});
