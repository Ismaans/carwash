// Mobile menu functionality
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Hide/Show header on scroll
let lastScroll = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        header.classList.remove('scroll-up');
        return;
    }
    
    if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
        // Scrolling down
        header.classList.remove('scroll-up');
        header.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
        // Scrolling up
        header.classList.remove('scroll-down');
        header.classList.add('scroll-up');
    }
    lastScroll = currentScroll;
});

document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.service-tab');
    const contents = document.querySelectorAll('.service-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs and contents
            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));

            // Add active class to clicked tab and corresponding content
            tab.classList.add('active');
            document.getElementById(`service-${tab.dataset.service}`).classList.add('active');
        });
    });
});

// Contact button functionality
function handleContact() {
    const phoneNumber = '+15713658670';
    const options = document.createElement('div');
    options.className = 'contact-options';
    options.innerHTML = `
        <div class="contact-overlay" onclick="this.parentElement.remove()"></div>
        <div class="contact-popup">
            <a href="tel:${phoneNumber}" class="contact-option">
                <i class="fas fa-phone"></i> Call
            </a>
            <a href="sms:${phoneNumber}" class="contact-option">
                <i class="fas fa-comment"></i> Text
            </a>
            <button onclick="this.parentElement.parentElement.remove()" class="contact-option cancel">
                Cancel
            </button>
        </div>
    `;
    document.body.appendChild(options);
}

// Booking modal functionality
const bookingUrls = {
    'standard-sedan': 'https://app.simplymeet.me/rahims-detailing/1749316406?is_widget=1&view=compact',
    'standard-suv': 'https://app.simplymeet.me/rahims-detailing/1749316067?is_widget=1&view=compact',
    'standard-truck': 'https://app.simplymeet.me/rahims-detailing/1749316312?is_widget=1&view=compact',
    'premium-sedan': 'https://app.simplymeet.me/rahims-detailing/1749317169?is_widget=1&view=compact',
    'premium-suv': 'https://app.simplymeet.me/rahims-detailing/1749317239?is_widget=1&view=compact',
    'premium-truck': 'https://app.simplymeet.me/rahims-detailing/1749317339?is_widget=1&view=compact'
};

function openBookingModal(serviceType) {
    const modal = document.getElementById('bookingModal');
    const bookingFrame = document.getElementById('booking-frame');
    
    if (modal && bookingFrame) {
        bookingFrame.src = bookingUrls[serviceType];
        modal.style.display = 'block';
    }
}

// Add event listeners when the document is loaded
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('bookingModal');
    const bookingFrame = document.getElementById('booking-frame');
    const closeBtn = document.querySelector('.close');

    if (closeBtn && modal) {
        // Close modal when clicking the close button
        closeBtn.onclick = function() {
            modal.style.display = 'none';
            if (bookingFrame) {
                bookingFrame.src = ''; // Clear the frame
            }
        }

        // Close modal when clicking outside
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = 'none';
                if (bookingFrame) {
                    bookingFrame.src = ''; // Clear the frame
                }
            }
        }
    }
});