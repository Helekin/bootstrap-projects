const images = document.querySelectorAll(".gallery .image-container");
const imageModal = document.getElementById("image-modal");

images.forEach((image) => {
  image.addEventListener("click", () => {
    const route = image.querySelector("img").src;
    imageModal.src = route;
  });
});
