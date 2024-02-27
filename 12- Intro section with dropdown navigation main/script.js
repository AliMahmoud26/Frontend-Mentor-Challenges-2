const listItem = document.querySelector('.sub-link-1');
const listItemTwo = document.querySelector('.sub-link-2');
const firstSubmenu = document.querySelector('.submenu-1');
const secondSubmenu = document.querySelector('.submenu-2');
const arrowIcon = listItem.querySelector('.arrow-icon');
const arrowIconTwo = listItemTwo.querySelector('.arrow-icon');

listItem.addEventListener('click', (event) => {
    event.stopPropagation();
    firstSubmenu.classList.toggle('show');

    if (firstSubmenu.classList.contains('show')) {
        arrowIcon.src = 'images/icon-arrow-up.svg';
    } else {
        arrowIcon.src = 'images/icon-arrow-down.svg';
    }
});

document.addEventListener('click', (event) => {
    if (!firstSubmenu.contains(event.target)) {
        firstSubmenu.classList.remove('show');
        arrowIcon.src = 'images/icon-arrow-down.svg';
    }
});

listItemTwo.addEventListener('click', (event) => {
    event.stopPropagation();
    secondSubmenu.classList.toggle('active');

    if (secondSubmenu.classList.contains('active')) {
        arrowIconTwo.src = 'images/icon-arrow-up.svg';
    } else {
        arrowIconTwo.src = 'images/icon-arrow-down.svg';
    }
});

document.addEventListener('click', (event) => {
    if (!secondSubmenu.contains(event.target)) {
        secondSubmenu.classList.remove('active');
        arrowIconTwo.src = 'images/icon-arrow-down.svg';
    }
});
