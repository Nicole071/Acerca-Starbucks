/* Activadpr de jQuery */
$(document).ready(function(){

    // Activador de Slick-Slider para el Banner de Imágenes
    $('.slick-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaysppeed: 3000,
        speed: 300,
        arrows: true,
        fade: true,
        pauseOnHover: false
    });

    // Activador de Slick-Slider para el Banner de Testimonios
    $('.slick-testimonios').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaysppeed: 3000,
        speed: 300,
        arrows: true,
        fade: false,
        pauseOnHover: false
    });
});