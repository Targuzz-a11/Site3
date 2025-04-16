// document.addEventListener("DOMContentLoaded", function () {
//   const slides = document.querySelectorAll(".swiper-slide");
//   let currentIndex = 0;

//   function updateSlides() {
//       slides.forEach((swiper) => {
//           swiper.classList.add("hidden");
//       });

//       for (let i = currentIndex; i < currentIndex + 3 && i < slides.length; i++) {
//           slides[i].classList.remove("hidden");
//       }
//   }

//   document.getElementById("nextImg").addEventListener("click", function () {
//       if (currentIndex < slides.length - 3) {
//           currentIndex++;
//           updateSlides();
//       }
//   });

//   document.getElementById("backImg").addEventListener("click", function () {
//       if (currentIndex > 0) {
//           currentIndex--;
//           updateSlides();
//       }
//   });
//   updateSlides();
// });

document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".swiper-slide");
    let currentIndex = 0;
    let slidesToShow = getSlidesToShow();

    function getSlidesToShow() {
        return window.innerWidth <= 999 ? 1 : 3;
    }

    function updateSlides() {
        slides.forEach((slide, index) => {
            if (index >= currentIndex && index < currentIndex + slidesToShow) {
                slide.classList.remove("hidden");
            } else {
                slide.classList.add("hidden");
            }
        });
    }

    function checkScreenSize() {
        const newSlidesToShow = getSlidesToShow();
        if (newSlidesToShow !== slidesToShow) {
            slidesToShow = newSlidesToShow;
            if (currentIndex > slides.length - slidesToShow) {
                currentIndex = slides.length - slidesToShow;
                if (currentIndex < 0) currentIndex = 0;
            }
            updateSlides();
        }
    }

    document.getElementById("nextImg").addEventListener("click", function () {
        if (currentIndex < slides.length - slidesToShow) {
            currentIndex++;
            updateSlides();
        }
    });

    document.getElementById("backImg").addEventListener("click", function () {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlides();
        }
    });

    window.addEventListener("resize", () => {
        checkScreenSize();
    });

    updateSlides();
});
function toggleMenu() {
    const menu = document.getElementById('menu');
    const toggle = document.getElementById('menuToggle');
    menu.classList.toggle('open');
    toggle.classList.toggle('open');
  }
