console.log('My wife is my heart')

// Select the button
const button = document.querySelector('button');

// Add an event listener to the button
button.addEventListener('click', function() {
  // Display an alert when the button is clicked
  alert('I love you so much!');
});

window.onload = function() {
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

  setInterval(function() {
      let activeIndex = Array.from(slides).findIndex(slide => slide.classList.contains('active'));
      let nextIndex = (activeIndex + 1) % slides.length;

      removeActive(slides[activeIndex]);
      addActive(slides[nextIndex]);
  }, 3000); // Adjusted timing to match CSS transition timing
};