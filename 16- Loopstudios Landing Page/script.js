const navbar = document.querySelector('ul');
const barsIcon = document.querySelector('.bars-icon');
const timesIcon = document.querySelector('.times-icon');

barsIcon.addEventListener('click', () => {
    navbar.classList.add('show');
});

timesIcon.addEventListener('click', () => {
    navbar.classList.remove('show');
});