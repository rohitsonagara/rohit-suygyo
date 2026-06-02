$(document).on('click', 'header nav a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});

$(document).ready(function(){

    $('.banner-section .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    items : 1,
    nav:true,
    autoplay:true,
   smartSpeed:450,
    autoplayHoverPause:true,
     animateOut: 'animate__fadeOutDown',
    animateIn: 'animate__fadeInDown',
})

$('.dog-care .owl-carousel').owlCarousel({
    loop:true,
    margin:66,
    nav:true,
   autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2,
            margin:20,
        },
        
        768:{
            items:3,
             margin:30,
        },

        1025:{
            items:3
        }
    }
})
owl.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY>0) {
        owl.trigger('next.owl');
    } else {
        owl.trigger('prev.owl');
    }
    e.preventDefault();
});


})




