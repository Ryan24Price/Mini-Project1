const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const nextbutton = document.querySelector('.carousel__button--right');
const prevbutton = document.querySelector('.carousel__button--left');
const dotsnav = document.querySelector('.carsouel__nav');
const dots = Array.from(dotsnav.children);

const slidesSize = slides[0].getboundingClientRect().width;
// console.log(slidewidth);

// arrange the slides next to one another

const setSlidePosition = (slide,index) => {
    slide.style.left = slideswidth * index + 'px';
}
slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left
    currentSlide.classlist.remove('current-slide');
    targetSlide.classList.add('current-slide');
}

const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
}

const hideShowArrows = (slides, prevButton, nextButton, targetindex) => {
    if (targetIndex === 0) {
        prevbutton.classList.add('is-hidden');
        nextbutton.classList.remove('is-hidden');
    }   else if (targetIndex === slides.lenght - 1) {
        prevbutton.classList.remove('is-hidden');
        nextbutton.classList.add('is-hidden');
    }   else {
        prevbutton.classList.remove('is-hidden');
        nextbutton.classList.remove('is-hidden');
    }
    
}
// when i click Left, move slide to the left 
prevbutton.addEventListener('click', e => {
    const currentslide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const prevDot = currentDot.previousElementSibling;

    moveToSlide(track, currentSlide, prevSlide);
    updateDots(currentDot, prevDot);
});

// when i click right, move slide to the right
nextbutton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const nextDot = currentDot.nextElementSibling;

    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);
})


// when i click the nav indicators, move to that slide

dotsNav.addEventListener('click', e => {

    const targetDot = e.target.closest('button');

    if (!targetDot) return;

    const currentSlide = track.querySelector('.current-slide');
    const currentDot = dotsNav.querySelector('.current-slide');
    const targetIndex = dots.findIndex(dot => dot === targetDot)
    const targetSlide = slides [targetIndex];

    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, targetDot);
    hideShowArrows = (slides, prevButton, nextButton, targetindex);


})
