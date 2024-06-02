/*=============== REMOVE MENU MOBILE ===============*/

const navLink = document.querySelectorAll('.nav__link') as NodeListOf<HTMLElement>;

const linkAction = (): void => {
    const navMenu = document.getElementById('nav-menu') as HTMLElement | null;

    if (navMenu) {
        navMenu.classList.remove('show-menu');
    }
};

navLink.forEach(n => n.addEventListener('click', linkAction));
