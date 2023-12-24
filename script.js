const toggleNav = (e) => {
    const navItem = e.parentElement;
    const navLinks = navItem.querySelector('.nav-link-wrapper');

    // Toggler
    navItem.classList.toggle('active');
    navLinks.classList.toggle('active');
}

const navToggler = document.getElementById('nav-toggle');
const nav = document.getElementById('navbar');

navToggler.addEventListener('click', (e) => {
    nav.classList.toggle('active');
    navToggler.classList.toggle('active');
})

document.addEventListener('click' , (e) => {
    if(!nav.contains(e.target) && !navToggler.contains(e.target)) {
        nav.classList.remove('active');
        navToggler.classList.remove('active');
    }
})