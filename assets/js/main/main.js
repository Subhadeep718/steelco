document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.controls-button');
    const slides = document.querySelectorAll('.slide-wrapper');
    let currentIndex = 0;

    function changeSlide(index) {
        // Ensure the index is within bounds
        if (index < 0) {
            index = slides.length - 1;
        } else if (index >= slides.length) {
            index = 0;
        }

        // Remove active class from all slides and buttons
        slides.forEach(slide => slide.classList.remove('active'));
        buttons.forEach(btn => btn.classList.remove('active'));

        // Add active class to the new slide and button
        slides[index].classList.add('active');
        buttons[index].classList.add('active');

        // Update currentIndex
        currentIndex = index;
    }

    buttons.forEach((button, index) => {
        button.addEventListener('click', function () {
            changeSlide(index);
        });
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'ArrowRight') {
            changeSlide(currentIndex + 1);
        } else if (event.key === 'ArrowLeft') {
            changeSlide(currentIndex - 1);
        }
    });
});

