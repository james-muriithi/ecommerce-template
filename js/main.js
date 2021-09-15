let owl = $(".owl-carousel");
owl.owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    lazyLoad: true,
    navText: [
        "<i class='fa fa-chevron-left'></i>",
        "<i class='fa fa-chevron-right'></i>",
    ],
    responsive: {
        0: {
            items: 1,
        },
        1000: {
            items: 1,
        },
    },
});

owl.on("change.owl.carousel", function(event) {
    var item = event.page.index;

    $(".owl-item")
        .not(".cloned")
        .eq(item)
        .find(".animate__animated")
        .each(function() {
            let animationClass = $(this).data("animate");
            if (animationClass) {
                $(this).removeClass(animationClass);
            }
        });
});

owl.on("changed.owl.carousel", function(event) {
    var item = event.page.index; // Position of the current item

    $(".owl-item")
        .not(".cloned")
        .eq(item)
        .find(".animate__animated")
        .each(function() {
            let animationClass = $(this).data("animate");
            if (animationClass) {
                $(this).addClass(animationClass);
            }
        });
});

$(function() {
    $('.slick-slider').slick({
        arrows: false,
        slidesToShow: 4,
        responsive: [{
            breakpoint: 976,
            settings: {
                arrows: false,
                centerMode: false,
                centerPadding: '40px',
                slidesToShow: 3
            }
        }, {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: false,
                centerPadding: '40px',
                slidesToShow: 2
            }
        }]
    });

    $('.slick-slider2').slick({
        arrows: false,
        slidesToShow: 1,
        dots: true,
        responsive: [{
            breakpoint: 976,
            settings: {
                arrows: false,
                centerMode: false,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }, {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: false,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }]
    });

    $('.slick-slider3').slick({
        arrows: false,
        slidesToShow: 1,
        dots: false,
        responsive: [{
                breakpoint: 976,
                settings: {
                    arrows: false,
                    centerMode: false,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: false,
                    centerPadding: '40px',
                    slidesToShow: 2
                }
            }, {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: false,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });
})