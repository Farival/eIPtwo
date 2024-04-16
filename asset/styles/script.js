const slideshow = document.getElementById('slides');
  const slides = document.querySelectorAll('.slide');
  const intervalTime = 2300; // Waktu antara setiap perpindahan gambar
  let slideIndex = 0;

  function nextSlide() {
    slideIndex++;
    if (slideIndex >= slides.length) {
      slideIndex = 0;
    }
    updateSlide();
  }

  function updateSlide() {
    slideshow.style.transform = `translateX(${-slideIndex * 100}%)`;
  }

  setInterval(nextSlide, intervalTime);

  function openModal(imageSrc) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("modalImg");
    modal.style.display = "block";
    modalImg.src = imageSrc;
  }
  
  function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
  }
  
 
  function toggleNav() {
    var hamburger = document.querySelector(".hamburger");
    var navbar = document.getElementById("navbar");
    hamburger.classList.toggle("open");
    navbar.style.display = (navbar.style.display === "block") ? "none" : "block";
  }
  
  function closeNav() {
    var hamburger = document.querySelector(".hamburger");
    var navbar = document.getElementById("navbar");
    hamburger.classList.remove("open");
    navbar.style.display = "none";
  }