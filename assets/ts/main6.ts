/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]') as NodeListOf<HTMLElement>;

const scrollActive = (): void => {
    const scrollDown = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute('id');

        if (sectionId) {
            const sectionsClass = document.querySelector(`nav__menu a[href*=${sectionId}]`) as HTMLElement | null;

            if (sectionsClass) {
                if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
                    sectionsClass.classList.add('active-link');
                } else {
                    sectionsClass.classList.remove('active-link');
                }
            }
        }
    });
};

window.addEventListener('scroll', scrollActive);
