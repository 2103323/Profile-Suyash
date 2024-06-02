/*=============== SHOW SCROLL UP ===============*/
var scrollUp = function () {
    var scrollUpElement = document.getElementById('scroll-up');
    if (scrollUpElement) {
        window.scrollY >= 350 ? scrollUpElement.classList.add('show-scroll')
            : scrollUpElement.classList.remove('show-scroll');
    }
};
window.addEventListener('scroll', scrollUp);
