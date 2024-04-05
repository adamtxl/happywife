console.log('My wife is my heart');

// Select the button
const button = document.querySelector('button');

// Add an event listener to the button
button.addEventListener('click', function () {
  // Display an alert when the button is clicked
  alert('I love you so much!');
/*});

window.onload = function () {
  let slides = document.querySelectorAll('.carousel-item');

  function addActive(slide) {
    slide.classList.add('active');
  }

  function removeActive(slide) {
    slide.classList.remove('active');
  }

  // Initially hide all slides except the first one
  for (let i = 1; i < slides.length; i++) {
    removeActive(slides[i]);
  }

  setInterval(function () {
    let activeIndex = Array.from(slides).findIndex((slide) =>
      slide.classList.contains('active')
    );
    let nextIndex = (activeIndex + 1) % slides.length;

    removeActive(slides[activeIndex]);
    addActive(slides[nextIndex]);
  }, 3000); // Adjusted timing to match CSS transition timing
};
function removeActive(slide) {
  console.log('Removing active class from slide:', slide);
  slide.classList.remove('active');
} 
*/

window.onload = function() {
  const carouselInner = document.querySelector('.carousel-inner');
  const carouselItems = document.querySelectorAll('.carousel-item');
  let currentIndex = 0;

  function showSlide(index) {
    carouselInner.style.transform = `translateX(-${index * 100}%)`;
    carouselItems.forEach(item => item.classList.remove('active'));
    carouselItems[index].classList.add('active');
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    showSlide(currentIndex);
  }

  // Optionally, implement autoplay functionality
  setInterval(nextSlide, 3000); // Change slide every 3 seconds
};