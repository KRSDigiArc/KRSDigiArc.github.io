// Initialise FlexSlider for Carousels
//$(window).load(function() {

$(document).ready(function() {
    $('.flexslider').flexslider({
    animation: "fade",
        controlNav: false,
        pauseOnHover: true,
    directionNav: false,
    slideshowSpeed: 2000,
    animationSpeed: 600,
    touch: true
///    start: function(){
 //      $('.flexImages').show();
 //   },
    });
});
