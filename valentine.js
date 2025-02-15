function animateHeart() {
  const heart = document.getElementById("heart");
  heart.classList.add("heart-big");
  setTimeout(() => {
    heart.classList.remove("heart-big");
  }, 2000);
}
