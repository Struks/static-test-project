
$(document).ready(function () {

    $('.carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.carousel1',
        responsive: [
            {
                breakpoint: 540,
                settings:{
                    arrows: false
                }
            }
        ]
    });
    $('.carousel1').slick({
        variableWidth: true,
        slidesToShow: 1,
        slidesToScroll: 3,
        arrows:false,
        asNavFor: '.carousel',
        centerMode: true,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1058,
                settings: {
                    slidesToShow: 3,
                    arrows:false,
                    centerMode: true,         
                    centerPadding: '30px'
                }
            },
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 1,
                    arrows:false,
                    centerMode: true,        
                    centerPadding: '30px'
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    arrows:false,
                    centerMode: true,
                    centerPadding: '30px'
                }
            },
        ]
    });
});



