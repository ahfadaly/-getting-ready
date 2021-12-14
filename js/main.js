// vegas =========================== //
$('body').vegas({
    slides: [
        { src: 'images/slide-image01.jpg' },
        { src: 'images/slide-image02.jpg' },
        { src: 'images/slide-image03.jpg' }
    ],
    timer: false,
    transition: [ 'zoomOut', ]
});

// nav_toggler =========================== // 
let menu = document.querySelector('.menu');
    navTogger = menu.querySelector('.nav-toggler');
navTogger.addEventListener(`click`,() =>{
    menu.classList.toggle('active');
})


