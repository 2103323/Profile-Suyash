/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr =  ScrollReveal({
    origin:'top',
    distance:'60px',
    duration:'2500',
    delay:400,
 })
 sr.reveal(`.home__data,.experience,.skills,.contact__container`)
 sr.reveal(`.home__img`,{delay:600})
 sr.reveal(`.home__scroll`,{delay:800})
 sr.reveal(`.work__card , .services__card`,{interval: 100})
 sr.reveal(`.about__content`,{origin: 'right'})
 sr.reveal(`.about__img`,{origin: 'left'})