$(function () {
    $('.display__img').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    });

    $(".humberger").on("click", function () {
        if ($("header").hasClass("open")) {
            $("header").removeClass("open");
        } else {
            $("header").addClass("open");
        }
    });

    $(".menu").on("click", function () {
        $("header").removeClass("open");
    });

    $('a[href^="#"]').click(function () {
        let href = $(this).attr("href");
        let target = $(href == "#" || href == "" ? "html" : href);
        let position = target.offset().top;
        $("html, body").animate({ scrollTop: position }, 600, "swing");
        return false;
    });
});
