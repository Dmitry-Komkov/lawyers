// Main js file

class Slideshow {
    constructor() {

    }
}

$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:40,
        nav:true,
        dots: false,
        stagePadding: 20,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });
})