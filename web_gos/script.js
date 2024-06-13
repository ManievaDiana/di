document.addEventListener('DOMContentLoaded', function () {
    // Burger 
    const burgerMenu = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('.nav-links');
    burgerMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Slider
    let slideIndex = 0;
    const slides = document.querySelectorAll('.slide');
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');

    function showSlides() {
        slides.forEach((slide, index) => {
            slide.style.display = index === slideIndex ? 'block' : 'none';
        });
    }

    function changeSlide(n) {
        slideIndex += n;
        if (slideIndex >= slides.length) {
            slideIndex = 0;
        } else if (slideIndex < 0) {
            slideIndex = slides.length - 1;
        }
        showSlides();
    }

    prev.addEventListener('click', () => changeSlide(-1));
    next.addEventListener('click', () => changeSlide(1));
    showSlides();

    // Tabs
    const tabLinks = document.querySelectorAll('.tab-links li a');
    const tabs = document.querySelectorAll('.tab');
    tabLinks.forEach((link, index) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            tabLinks.forEach(link => link.parentElement.classList.remove('active'));
            link.parentElement.classList.add('active');
            tabs.forEach(tab => tab.classList.remove('active'));
            tabs[index].classList.add('active');
        });
    });

    // Modal Window
    const modal = document.getElementById("modal");
    const btn = document.getElementById("openModal");
    const span = document.getElementsByClassName("close")[0];

    btn.onclick = function() {
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }

    // Dark Mode
    const toggleDarkMode = document.getElementById('toggle-dark-mode');
    toggleDarkMode.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });
});


