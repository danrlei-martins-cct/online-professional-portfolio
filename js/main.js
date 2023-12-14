// Init Animate On Scroll (AOS) Library 
// @ref: https://github.com/michalsnik/aos
AOS.init();

AOS.init({
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 700, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});

// Portfolio Modal Window Events

//1st Modal Window
// Get the link element by its ID
var link = document.getElementById("project-link-one");

// Add an event listener to the link element
link.addEventListener("click", function (event) {
    // Prevent the default link behavior
    event.preventDefault();

    // Get the modal element by its ID
    var modal = document.getElementById("project-modal-one");

    // Show the modal
    modal.style.display = "block";

    // Add an event listener to the link inside the modal that hides the modal when clicked
    var modalLink = modal.querySelector("#close-project-one");
    modalLink.addEventListener("click", function (event) {
        // Prevent the default link behavior
        event.preventDefault();

        // Hide the modal
        modal.style.display = "none";
    });
});

//2nd Modal Window
// Get the link element by its ID
var link = document.getElementById("project-link-two");

// Add an event listener to the link element
link.addEventListener("click", function (event) {
    // Prevent the default link behavior
    event.preventDefault();

    // Get the modal element by its ID
    var modal = document.getElementById("project-modal-two");

    // Show the modal
    modal.style.display = "block";

    // Add an event listener to the link inside the modal that hides the modal when clicked
    var modalLink = modal.querySelector("#close-project-two");
    modalLink.addEventListener("click", function (event) {
        // Prevent the default link behavior
        event.preventDefault();

        // Hide the modal
        modal.style.display = "none";
    });
});

// Services Carousel/Slider
// Get the services wrapper and the "Show More" button
var servicesWrapper = document.getElementById('services-wrapper');
var showMoreBtn = document.getElementById('next-services-btn');

// Get all the services items
var servicesItems = servicesWrapper.querySelectorAll('.col-md-4');

// Set the number of visible items and the current slide index
var visibleItems = 3;
var currentSlide = 0;

// Create a function to show the next slide
function showNextSlide() {
    // Check if there are any hidden services items
    var hiddenServices = servicesWrapper.querySelectorAll('.d-none');
    if (hiddenServices.length === 0) {
        // Hide the "Show More" button if all services items are visible
        showMoreBtn.classList.add('d-none');
        return;
    }
    // Calculate the index of the next slide
    var nextSlide = currentSlide + visibleItems;
    if (nextSlide >= servicesItems.length) {
        nextSlide = servicesItems.length;
    }
    // Create a new slide element and add the visible services items to it
    var slide = document.createElement('div');
    slide.classList.add('carousel-slide');
    for (var i = currentSlide; i < nextSlide; i++) {
        slide.appendChild(servicesItems[i].cloneNode(true));
    }
    // Add the slide to the carousel and update the current slide index
    var carousel = document.getElementById('services-carousel');
    carousel.appendChild(slide);
    currentSlide = nextSlide;
}

// Show the hidden services items when the "Show More" button is clicked
showMoreBtn.addEventListener('click', function () {
    var hiddenServices = servicesWrapper.querySelectorAll('.d-none');
    for (var i = 0; i < hiddenServices.length; i++) {
        hiddenServices[i].classList.remove('d-none');
    }
    // Update the carousel to show the new items
    showNextSlide();
});

// Show the first slide when the page loads
showNextSlide();