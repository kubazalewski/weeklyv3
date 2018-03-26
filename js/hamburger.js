function attachToggle() {
    const hamburger = document.getElementById('btn__hamburger');
    hamburger.addEventListener('click', toggleNav);
    //making navigation close and hamburger back to its original state
    let anchor = document.querySelectorAll('.nav__anchor');

    for (i = 0; i < anchor.length; i++) {
        anchor[i].addEventListener('click', anchorClick);
    }
    // anchor[0].addEventListener('click', anchorClick);
    // anchor[1].addEventListener('click', anchorClick);
    // anchor[2].addEventListener('click', anchorClick);
    // anchor[3].addEventListener('click', anchorClick);
    // anchor[4].addEventListener('click', anchorClick);
}

function toggleNav() {
    let hamburger = document.getElementById('btn__hamburger');
    hamburger.classList.toggle('btn__hamburger--focused');
    let nav = document.getElementById('nav__list');
    nav.classList.toggle('nav__list--visible');
}

function anchorClick() {
    let hamburger = document.getElementById('btn__hamburger');
    hamburger.classList.remove('btn__hamburger--focused');
    let nav = document.getElementById('nav__list');
    nav.classList.remove('nav__list--visible');
}

attachToggle();