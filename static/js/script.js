document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuClose = document.getElementById('mobileMenuClose');
    const mobileMenuOverlay = document.querySelector('.mobile-side-menu-overlay');

    // Function to open the menu
    function openMenu() {
        mobileMenu.classList.add('active');
        mobileMenuOverlay.style.display = 'block';
    }

    // Function to close the menu
    function closeMenu() {
        mobileMenu.classList.remove('active');
        mobileMenuOverlay.style.display = 'none';
    }

    // Event listeners
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', openMenu);
    }

    if (mobileMenuClose) {
        mobileMenuClose.addEventListener('click', closeMenu);
    }
    
    if (mobileMenuOverlay) {
        mobileMenuOverlay.addEventListener('click', closeMenu);
    }
});