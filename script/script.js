function toggleMobileNav() {

    const body = document.querySelector('body')
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileLinks = document.querySelector('.mobile-links');
    const overlay = document.querySelector('.overlay');

    mobileNav.addEventListener('click', function () {
        body.classList.toggle('open');
        
        if (body.matches('.open')) {
            overlay.classList.add('on');
            mobileLinks.style.right = '0';
            
            
        }
        else {
            mobileLinks.style.right = '-375px';
            overlay.classList.remove('on')
        }

    });



}


toggleMobileNav();