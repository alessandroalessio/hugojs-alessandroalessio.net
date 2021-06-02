// $(window).on('load', function() {
//     if ( $('#preloader').length ) {
//         $('#preloader').hide();
//     }
// });
/*barba.init({
    transitions: [{
        name: 'default',
        beforeLeave() {
            gsap.fromTo("#preloader", {opacity: 0, top: '-20px', zIndex:'-2'}, { opacity: 1, top: 0, zIndex: 10 });
            $('#FullsizeControl').prop( "checked", false );
            // $('#preloader').toggle();
        },
        enter() {
            setTimeout(function(){
                gsap.fromTo("#preloader", {opacity: 1, top: 0, zIndex: 10}, { opacity: 0, top: '-20px', zIndex: '-2' });
            }, 0);
        }
    }]
});*/
gsap.fromTo("#preloader", {opacity: 1, top: 0, zIndex: 10}, { opacity: 0, top: '-20px', zIndex: '-2' });