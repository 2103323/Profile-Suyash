/*=============== SHOW MENU ===============*/
var navMenu = document.getElementById('nav-menu');
var navToggle = document.getElementById('nav-toggle');
var navClose = document.getElementById('nav-close');
/*Menu show*/
if (navToggle) {
    navToggle.addEventListener('click', function () {
        if (navMenu) {
            navMenu.classList.add('show-menu');
        }
    });
}
/*Menu hidden*/
if (navClose) {
    navClose.addEventListener('click', function () {
        if (navMenu) {
            navMenu.classList.remove('show-menu');
        }
    });
}
// /*=============== REMOVE MENU MOBILE ===============*/
// const navLink = document.querySelectorAll('.nav__link')
// const linkAction = () => {
//     const navMenu = document.getElementById('nav-menu')
//     navMenu.classList.remove('show-menu')
// }
// navLink.forEach(n => n.addEventListener('click', linkAction))
// /*=============== ADD BLUR HEADER ===============*/
// const blurHeader = () => {
//     const header = document.getElementById('header')
//     this.scrollY >= 50 ? header.classList.add('blur-header')
//         : header.classList.remove('blur-header')
// }
// window.addEventListener('scroll', blurHeader)
// /*=============== EMAIL JS ===============*/
// const contactForm = document.getElementById('contact-form'),
//     contactMessage = document.getElementById('contact-message')
// const sendEmail = (e) => {
//     e.preventDefault()
//     // serviceID - templateID - #form - publicKey
//     emailjs.sendForm('service_i2j2np4', 'template_7hyx5fg', '#contact-form', '2IA3SQGDVkX9IW5v3').then(() => {
//         // Show sent message     
//         contactMessage.textContent = 'Message sent successfully ✅'
//         // Remove message after 5 second
//         setTimeout(() => {
//             contactMessage.textContent = ''
//         }, 5000)
//         // Clear input fields
//         contactForm.reset()
//     }, () => {
//         contactMessage.textContent = 'Message not sent (service error) ❌'
//     })
// }
// contactForm.addEventListener('submit', sendEmail)
// /*=============== SHOW SCROLL UP ===============*/
// const scrollUp = () => {
//     const scrollUp = document.getElementById('scroll-up')
//     this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
//         : scrollUp.classList.remove('show-scroll')
// }
// window.addEventListener('scroll', scrollUp)
// /*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
// const sections = document.querySelectorAll('section[id]')
// const scrollActive = () => {
//     const scrollDown = window.scrollY
//     sections.forEach(current => {
//         const sectionHeight = current.offsetHeight,
//             sectionTop = current.offsetTop - 58,
//             sectionId = current.getAttribute('id'),
//             sectionsClass = document.querySelector('nav__menu a[href*=' + sectionId + ']')
//         if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
//             sectionsClass.classList.add('active-link')
//         }
//         else {
//             sectionsClass.classList.remove('active-link')
//         }
//     })
// }
// window.addEventListener('scroll', scrollActive)
// /*=============== SCROLL REVEAL ANIMATION ===============*/
// const sr =  ScrollReveal({
//    origin:'top',
//    distance:'60px',
//    duration:'2500',
//    delay:400,
// })
// sr.reveal(`.home__data,.experience,.skills,.contact__container`)
// sr.reveal(`.home__img`,{delay:600})
// sr.reveal(`.home__scroll`,{delay:800})
// sr.reveal(`.work__card , .services__card`,{interval: 100})
// sr.reveal(`.about__content`,{origin: 'right'})
// sr.reveal(`.about__img`,{origin: 'left'})
