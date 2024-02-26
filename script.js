document.addEventListener('DOMContentLoaded', function() {
    const navBar = document.getElementById('nav-links');
    const mobileNav = document.getElementById('mobile-menu');
    const closeButton = document.getElementById('close-button');
    const menuButton = document.getElementById('menu-button');
    const mobileNavWrapper = document.getElementById('mobile-menu-content');
    const headerNavContainer = document.getElementById('main-nav');

    closeButton.addEventListener('click', close);
    menuButton.addEventListener('click', open);

    function close() {
        mobileNav.classList.toggle('active', false);
    }

    function open() {
        mobileNav.classList.toggle('active', true);
    }

    
    function appendToMobileNav() {
        mobileNavWrapper.appendChild(navBar);
    }

    function appendToHeader() {
        headerNavContainer.appendChild(navBar);
        close();
    }
    

    function handleScreenWidthChange() {
        const screenWidth = window.innerWidth;

        if (screenWidth <= 768) {
            appendToMobileNav();
        } else {
            appendToHeader();
        } 
    }

    handleScreenWidthChange();
    
    window.addEventListener('resize', handleScreenWidthChange);
});