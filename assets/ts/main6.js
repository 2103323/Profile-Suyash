/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
var sections = document.querySelectorAll('section[id]');
var scrollActive = function () {
    var scrollDown = window.scrollY;
    sections.forEach(function (current) {
        var sectionHeight = current.offsetHeight;
        var sectionTop = current.offsetTop - 58;
        var sectionId = current.getAttribute('id');
        if (sectionId) {
            var sectionsClass = document.querySelector("nav__menu a[href*=".concat(sectionId, "]"));
            if (sectionsClass) {
                if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
                    sectionsClass.classList.add('active-link');
                }
                else {
                    sectionsClass.classList.remove('active-link');
                }
            }
        }
    });
};
window.addEventListener('scroll', scrollActive);
