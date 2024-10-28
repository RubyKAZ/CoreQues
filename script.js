// Анимация появления элементов при прокрутке
document.addEventListener("DOMContentLoaded", function () {
    const faders = document.querySelectorAll(".fade-in");
    const appearOptions = { threshold: 0.5 };
    const appearOnScroll = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    }, appearOptions);
    faders.forEach(fader => appearOnScroll.observe(fader));
});

// Плавная прокрутка к нужной секции
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}
