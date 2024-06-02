/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()
    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_i2j2np4', 'template_7hyx5fg', '#contact-form', '2IA3SQGDVkX9IW5v3').then(() => {
        // Show sent message     
        contactMessage.textContent = 'Message sent successfully ✅'

        // Remove message after 5 second
        setTimeout(() => {
            contactMessage.textContent = ''
        }, 5000)

        // Clear input fields
        contactForm.reset()
    }, () => {
        contactMessage.textContent = 'Message not sent (service error) ❌'
    })
}

contactForm.addEventListener('submit', sendEmail)