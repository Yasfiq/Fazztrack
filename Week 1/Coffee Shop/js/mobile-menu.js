// Create Overlay
const overlay = document.createElement('div');
overlay.setAttribute('class', 'position-absolute top-0 bottom-0 start-0 end-0');
overlay.style.backgroundColor = 'rgba(0,0,0,.5)';
overlay.style.zIndex = '88';


// Fetch Mobile Nav
const mobileNav = document.querySelector('.mobile-nav');

// Fetch Hamburger Button
const hamburger = document.querySelector('.mobile-btn svg');

// Event on button click
hamburger.addEventListener('click', function() {
    // Add overlay to body
    document.body.appendChild(overlay);
    
    // Show mobile nav (translate = 0)
    mobileNav.style.transition = '.5s ease';
    mobileNav.style.transform = 'translateX(0)';

    // Event on overlay click
    overlay.addEventListener('click', function() {
        mobileNav.style.transform = 'translateX(-100%)';
        document.body.removeChild(this);
    })
})