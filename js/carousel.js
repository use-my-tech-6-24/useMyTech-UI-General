let sliderImages = document.querySelectorAll(".slide"),
  arrowLeft = document.querySelector("#arrow-left"),
  arrowRight = document.querySelector("#arrow-right"),
  slideContent = document.querySelectorAll('.hero-text'),
  current = 0;

// Clear all images
function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = "none";
  }
}

// Initialize slider
function startSlide() {
  reset();
  sliderImages[0].style.display = "block";
}

function startSlideContent(){
  slideContent[0].classList.add('animated', 'fadeInDown', 'slow');
}

// Shows prev
function slideLeft() {
  reset();
  sliderImages[current - 1].style.display = "block";
  current--;
}
function slideContentLeft(){
    slideContent[current - 1].classList.add('animated', 'flipInX');
}

// Shows next
function slideRight() {
  reset();
  sliderImages[current + 1].style.display = "block";
  current++;
}
function slideContentRight(){
  slideContent[current + 1].classList.add('animated', 'flipInX');
}
// Left arrow click
arrowLeft.addEventListener("click", function() {
  if (current === 0) {
    current = sliderImages.length;
  }
  slideLeft();
  slideContentLeft();
});

// Right arrow click
arrowRight.addEventListener("click", function() {
  if (current === sliderImages.length - 1) {
    current = -1;
  }
  slideContentRight();
  slideRight();
});

startSlide();
startSlideContent();