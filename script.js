document.addEventListener("DOMContentLoaded", function() {
    const profilePic = document.querySelector('.profile-pic img');

    profilePic.addEventListener('mouseenter', function() {
        this.style.borderColor = "#1a73e8";
    });

    profilePic.addEventListener('mouseleave', function() {
        this.style.borderColor = "#333";
    });
});
window.addEventListener('scroll', function() {
    let elements = document.querySelectorAll('.section');
    let screenSize = window.innerHeight;

    elements.forEach(function(element) {
        let elementPosition = element.getBoundingClientRect().top;

        if (elementPosition < screenSize - 100) {
            element.classList.add('visible');
        }
    });
});

document.getElementById('highlight-button').addEventListener('click', function() {
    document.getElementById('experience-section').classList.toggle('highlight');
});
