
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

