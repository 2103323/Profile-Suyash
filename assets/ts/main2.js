/*=============== REMOVE MENU MOBILE ===============*/
var navLink = document.querySelectorAll('.nav__link');
var linkAction = function () {
    var navMenu = document.getElementById('nav-menu');
    if (navMenu) {
        navMenu.classList.remove('show-menu');
    }
};
navLink.forEach(function (n) { return n.addEventListener('click', linkAction); });
