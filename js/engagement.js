window.onload = function () {
    const carouselItems = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;
  
    // Show initial slide
    showSlide(currentIndex);
  
    // Function to show a specific slide
    function showSlide(index) {
      // Hide all slides
      carouselItems.forEach((item) => item.classList.remove('active'));
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
      currentIndex =
        (currentIndex - 1 + carouselItems.length) % carouselItems.length;
      showSlide(currentIndex);
    }
  
    // Add event listeners to navigation buttons
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);
  };
  