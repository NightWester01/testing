document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelector('.slides');
    const slideWidth = document.querySelector('.slides img').clientWidth;
    
    let slideIndex = 0;
    let isSliding = false;
    
    function nextSlide() {
        if (!isSliding) {
            isSliding = true;
            slideIndex = (slideIndex + 1) % slides.children.length;
            updateSlidePosition();
        }
    }
    
    function updateSlidePosition() {
        slides.style.transition = 'transform 0.5s ease-in-out';
        slides.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
    
        setTimeout(() => {
            isSliding = false;
        }, 500);
    }
    
    setInterval(nextSlide, 3000);
});