jQuery(document).ready(function($){
    $('.planets__slideshow.owl-carousel').owlCarousel({
        smartSpeed: 1200,
        items:1,
        nav: false,
        dots: true,
        dotsData: true,
        margin: 50
    });
    $('.crew__slideshow.owl-carousel').owlCarousel({
        smartSpeed: 1200,
        items:1,
        nav: false,
        dots: true,
        margin: 50
    });
});
