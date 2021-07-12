gsap.fromTo("#preloader", {opacity: 1, top: 0, zIndex: 10}, { opacity: 0, top: '-20px', zIndex: '-2' });
$(document).ready(function(){
    $('#content a').has('img').fancybox();
});