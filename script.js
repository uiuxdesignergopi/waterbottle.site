document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".bottle-gallery img").forEach(img => {
    img.addEventListener("mouseenter", () => {
      img.style.transform = "translateY(-10px) rotate(-5deg) scale(1.05)";
    });
    img.addEventListener("mouseleave", () => {
      img.style.transform = "translateY(0) rotate(0) scale(1)";
    });
  });
});
