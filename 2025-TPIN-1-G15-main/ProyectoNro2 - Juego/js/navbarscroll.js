let prevScroll = window.pageYOffset;
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
let current = window.pageYOffset;
if (current > prevScroll) {
    navbar.classList.add('nav-hidden');
} else {
    navbar.classList.remove('nav-hidden');
}
prevScroll = current;
});
