/*=============== ADD BLUR HEADER ===============*/
const blurHeader = (): void => {
    // Get the header element
    const header = document.getElementById('header');
    // Initialize blurElement
    let blurElement = document.getElementById('blurElement') as HTMLElement | null;

    // Check if the header element exists
    if (!header) {
        return;
    }

    // If the scroll position is greater than or equal to 50
    if (window.scrollY >= 50) {
        // If blurElement does not exist, create it
        if (!blurElement) {
            blurElement = document.createElement('div');
            blurElement.id = 'blurElement';
            blurElement.style.position = 'absolute';
            blurElement.style.width = '1000%';
            blurElement.style.height = '100%';
            blurElement.style.backgroundColor = 'hsla(var(--hue), 70%, 4%, .2)';
            blurElement.style.backdropFilter = 'blur(16px)';
            blurElement.style.backdropFilter = 'blur(16px)';
            blurElement.style.top = '0';
            blurElement.style.left = '0';
            blurElement.style.zIndex = '-1';
            // Append blurElement to the header
            header.appendChild(blurElement);
        }
    } else {
        // If the scroll position is less than 50 and blurElement exists, remove it
        if (blurElement) {
            header.removeChild(blurElement);
        }
    }
}

// Add an event listener for the scroll event
window.addEventListener('scroll', blurHeader);
