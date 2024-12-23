let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 5000);
}

function changeSlide(n) {
    slideIndex += n;
    let slides = document.getElementsByClassName("slides");
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    if (slideIndex < 1) {
        slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

document.addEventListener('DOMContentLoaded', function () {
    const leftSlider = document.getElementById('left-slider');
    const rightSlider = document.getElementById('right-slider');
    const imageList = document.querySelector('.image-list');
    const imageItems = document.querySelectorAll('.image-item');
    const scrollbarThumb = document.querySelector('.scrollbar-thumb');
    
    let scrollAmount = 0;
    const itemWidth = imageItems[0].offsetWidth + 20;
    const scrollStep = 6;

    function updateScrollbar() {
        const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;
        const scrollbarWidth = (imageList.clientWidth / imageList.scrollWidth) * 100;
        scrollbarThumb.style.width = `${scrollbarWidth}%`;
        const scrollbarLeft = (scrollAmount / maxScrollLeft) * 100;
        scrollbarThumb.style.left = `${scrollbarLeft}%`;
    }

    leftSlider.addEventListener('click', function () {
        scrollAmount -= itemWidth * scrollStep;
        if (scrollAmount < 0) {
            scrollAmount = 0;
        }
        imageList.scrollTo({ left: scrollAmount, behavior: 'smooth' });
        updateScrollbar();
    });

    rightSlider.addEventListener('click', function () {
        scrollAmount += itemWidth * scrollStep;
        const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;
        if (scrollAmount > maxScrollLeft) {
            scrollAmount = maxScrollLeft;
        }
        imageList.scrollTo({ left: scrollAmount, behavior: 'smooth' });
        updateScrollbar();
    });

    updateScrollbar();
});

function displayRandomImage() {
    const images = document.querySelectorAll('.box7 img');
    const randomIndex = Math.floor(Math.random() * images.length);
    images[randomIndex].style.display = 'block'; 
}

function displayRandomImage1() {
    const images = document.querySelectorAll('.bottom30 img');
    const randomIndex = Math.floor(Math.random() * images.length);
    images[randomIndex].style.display = 'block'; 
}

window.onload = function() {
    displayRandomImage();
    displayRandomImage1();
};

let backToTopButton = document.getElementById("back-to-top");
window.onscroll = function() {scrollFunction()};
function scrollFunction(){
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }

}
function topFunction(){
  document.body.scrollTop = 0;
}

document.querySelectorAll('.rev i').forEach((star, index, stars) => {
    // Add hover effect
    star.addEventListener('mouseover', () => {
      stars.forEach((s, i) => {
        if (i <= index) {
          s.classList.remove('fa-regular');
          s.classList.add('fa-solid');
        } else {
          s.classList.remove('fa-solid');
          s.classList.add('fa-regular');
        }
      });
    });
  
    // Remove hover effect when the mouse leaves
    star.addEventListener('mouseout', () => {
      stars.forEach(s => {
        s.classList.remove('fa-solid');
        s.classList.add('fa-regular');
      });
    });
  });

    let currentPage = 1;
    const totalPages = 3;
    function updatePageNumber() {
      document.getElementById('page-number').textContent = `Page ${currentPage} of ${totalPages}`;
    }
    function changePage(direction) {
      document.getElementById(`page${currentPage}`).classList.remove('active');
      if (direction === 'next') {
        currentPage = currentPage === totalPages ? 1 : currentPage + 1;
      } else if (direction === 'prev') {
        currentPage = currentPage === 1 ? totalPages : currentPage - 1;
      }
      document.getElementById(`page${currentPage}`).classList.add('active');
      updatePageNumber();
    }
    document.getElementById(`page${currentPage}`).classList.add('active');
