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
  
  function toggleMenu(element) {
    var menu = document.getElementById("menu");
    var hamburger = document.querySelector('.hamburger');
    if (menu.style.width === "50%") {
        menu.style.width = "0";
        hamburger.classList.remove("open");
    } else {
        menu.style.width = "50%";
        hamburger.classList.add("open");
    }
}

function navigateTo(sectionId) {
    var menu = document.getElementById("menu");
    var hamburger = document.querySelector('.hamburger');
    menu.style.width = "0";
    hamburger.classList.remove("open");
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

const angka = document.querySelectorAll('.angka');

angka.forEach((angka) => {
    angka.addEventListener('click', () => {
        alert(`Angka yang dipilih: ${angka.textContent}`);
    });
});

const isMobile = window.matchMedia("only screen and (max-width: 768px)").matches; //hanya tersedia di mobile//

if (isMobile) {
    const angka = document.querySelectorAll('.angka, angkap, angkat');
    
    angka.forEach((angka) => {
        angka.addEventListener('click', () => {
            alert(`Angka yang dipilih: ${angka.textContent}`);
        });
    });
}
