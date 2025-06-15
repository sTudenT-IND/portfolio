// script.js

// Function to reveal elements on scroll
function revealOnScroll() {
    const reveals = document.querySelectorAll(".reveal");

    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", revealOnScroll);

// Optional: Flashing effect on first reveal
const flashElements = document.querySelectorAll(".flash");

flashElements.forEach((el) => {
    el.classList.add("flash-on-load");

    setTimeout(() => {
        el.classList.remove("flash-on-load");
    }, 1500);
});
