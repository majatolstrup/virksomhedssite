
document.addEventListener('DOMContentLoaded', function () {
    const burgerMenu = document.querySelector('.burger-menu');
    const navList = document.querySelector('.liste');

    burgerMenu.addEventListener('click', function () {
        navList.classList.toggle('active');
    });
});
