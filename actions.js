console.log('My wife is my heart');

var myButton = document.getElementById('myButton');

myButton.addEventListener('click', function () {
  // Display an alert when the button is clicked
  alert('I love you so much!');
});

/* });

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
  const carouselItems = document.querySelectorAll('.carousel-item');
  let currentIndex = 0;

  // Show initial slide
  showSlide(currentIndex);

  // Function to show a specific slide
  function showSlide(index) {
    // Hide all slides
    carouselItems.forEach(item => item.classList.remove('active'));
    // Show the selected slide
    carouselItems[index].classList.add('active');
  }

  // Function to show the next slide
  function nextSlide() {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    showSlide(currentIndex);
  }

  // Function to show the previous slide
  function prevSlide() {
    currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
    showSlide(currentIndex);
  }

  // Add event listeners to navigation buttons
  const prevButton = document.querySelector('.prev-button');
  const nextButton = document.querySelector('.next-button');
  prevButton.addEventListener('click', prevSlide);
  nextButton.addEventListener('click', nextSlide);
};