(function($) {
    "use strict";

    function headerLayoutOne() {
        document.addEventListener('DOMContentLoaded', function() {
            var userMenu = document.getElementById("userMenu");
            if (userMenu) {
                userMenu.addEventListener("click", function() {
                    var userMenuContent = document.getElementById("userMenuContent");
                    if (userMenuContent) {
                        userMenuContent.classList.toggle("show");
                    }
                });
            }
        });
    }

    function headerLayoutTwo() {
        document.addEventListener('DOMContentLoaded', function() {
            var userMenu = document.getElementById("userMenu");
            if (userMenu) {
                userMenu.addEventListener("click", function() {
                    var userMenuContent = document.getElementById("userMenuContent");
                    if (userMenuContent) {
                        userMenuContent.classList.toggle("show");
                    }
                });
            }
        });
    }

    function headerLayoutThree() {
        document.addEventListener('DOMContentLoaded', function() {
            var userMenu = document.getElementById("userMenu");
            if (userMenu) {
                userMenu.addEventListener("click", function() {
                    var userMenuContent = document.getElementById("userMenuContent");
                    if (userMenuContent) {
                        userMenuContent.classList.toggle("show");
                    }
                });
            }
        });
    }

    function headerLayoutFour() {
        document.addEventListener('DOMContentLoaded', function() {
            var userMenu = document.getElementById("userMenu");
            if (userMenu) {
                userMenu.addEventListener("click", function() {
                    var userMenuContent = document.getElementById("userMenuContent");
                    if (userMenuContent) {
                        userMenuContent.classList.toggle("show");
                    }
                });
            }
        });
    }

    function headerLayoutFive() {
        document.addEventListener('DOMContentLoaded', function() {
            var userMenu = document.getElementById("userMenu");
            if (userMenu) {
                userMenu.addEventListener("click", function() {
                    var userMenuContent = document.getElementById("userMenuContent");
                    if (userMenuContent) {
                        userMenuContent.classList.toggle("show");
                    }
                });
            }
        });
    }

    function headerLayoutSix() {
        document.addEventListener('DOMContentLoaded', function() {
            var userMenu = document.getElementById("userMenu");
            if (userMenu) {
                userMenu.addEventListener("click", function() {
                    var userMenuContent = document.getElementById("userMenuContent");
                    if (userMenuContent) {
                        userMenuContent.classList.toggle("show");
                    }
                });
            }
        });
    }

    function heroBanner() {

        $(".odometer").waypoint(
            function() {
                var odo = $(".odometer");
                odo.each(function() {
                    var countNumber = $(this).attr("data-count");
                    $(this).html(countNumber);
                });
            }, {
                offset: "80%",
                triggerOnce: true,
            }
        );

        // Venobox Video
        new VenoBox({
            selector: ".video-popup, .img-popup",
            bgcolor: "transparent",
            numeration: true,
            infinigall: true,
            spinner: "plane",
        });
    }

    function aboutSection() {
        $(".odometer").waypoint(
            function() {
                var odo = $(".odometer");
                odo.each(function() {
                    var countNumber = $(this).attr("data-count");
                    $(this).html(countNumber);
                });
            }, {
                offset: "80%",
                triggerOnce: true,
            }
        );
    }

    function funFact() {
        $(".odometer").waypoint(
            function() {
                var odo = $(".odometer");
                odo.each(function() {
                    var countNumber = $(this).attr("data-count");
                    $(this).html(countNumber);
                });
            }, {
                offset: "80%",
                triggerOnce: true,
            }
        );
    }

    function testimonialSlider() {
        $('.testi-review').each(function() {
            let rate = $(this).data('rate'); // Get the rating from data-rate
            let stars = $(this).find('.star-container');

            stars.each(function(index) {
                let starFill = $('<i class="fa-solid fa-star starfill"></i>'); // Create filled star overlay
                $(this).append(starFill);

                if (rate > index) {
                    if (rate < index + 1) {
                        // Fractional star
                        starFill.css('width', `${(rate - index) * 100}%`);
                    } else {
                        // Full star
                        starFill.css('width', '100%');
                    }
                } else {
                    // No star fill
                    starFill.css('width', '0%');
                }
            });
        });
        // Testi Carousel
        var swiperTesti = new Swiper(".testi-carousel", {
            slidesPerView: 2,
            spaceBetween: 24,
            slidesPerGroup: 1,
            loop: true,
            autoplay: true,
            grabcursor: true,
            speed: 600,
            navigation: {
                nextEl: ".course-feature .swiper-prev",
                prevEl: ".course-feature .swiper-next",
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    spaceBetween: 24,
                },
                767: {
                    slidesPerView: 2,
                    slidesPerGroup: 1,
                    spaceBetween: 24,
                },
                1024: {
                    slidesPerView: 2,
                    slidesPerGroup: 1,
                },
            },
        });

        // Testi Carousel
        var swiperTesti = new Swiper(".testi-carousel-2", {
            slidesPerView: 1,
            spaceBetween: 24,
            slidesPerGroup: 1,
            loop: true,
            autoplay: true,
            grabcursor: true,
            speed: 600,
            navigation: {
                nextEl: ".testi-carousel-wrap-2 .swiper-prev",
                prevEl: ".testi-carousel-wrap-2 .swiper-next",
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    spaceBetween: 24,
                },
                767: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    spaceBetween: 24,
                },
                1024: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                },
            },
        });

        // Testi Carousel
        var swiperTesti = new Swiper(".testi-carousel-3", {
            slidesPerView: 3,
            spaceBetween: 24,
            slidesPerGroup: 1,
            loop: true,
            autoplay: true,
            grabcursor: true,
            speed: 600,
            navigation: {
                nextEl: ".testi-carousel-wrap-2 .swiper-prev",
                prevEl: ".testi-carousel-wrap-2 .swiper-next",
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    spaceBetween: 24,
                },
                767: {
                    slidesPerView: 2,
                    slidesPerGroup: 1,
                    spaceBetween: 24,
                },
                1024: {
                    slidesPerView: 3,
                    slidesPerGroup: 1,
                },
            },
        });
        var swiperTesti = new Swiper(".testi-carousel-12", {
            slidesPerView: 3,
            spaceBetween: 24,
            grabcursor: true,
            speed: 600,
            loop: true,
            autoplay: true,
            grabcursor: true,
            breakpoints: {
                0: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                },
                992: {
                    slidesPerView: 3,
                },
                1200: {
                    slidesPerView: 3,
                }
            },
        });

        var swiperTesti = new Swiper(".testi-carousel-5", {
            slidesPerView: 2,
            spaceBetween: 24,
            grabcursor: true,
            speed: 600,
            loop: true,
            autoplay: true,
            grabcursor: true,
            navigation: {
                nextEl: '.testimonial-section-14 .swiper-prev',
                prevEl: '.testimonial-section-14 .swiper-next',
            },
            breakpoints: {
                0: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                },
                992: {
                    slidesPerView: 2,
                },
            },
        });

        var swiperTesti = new Swiper(".testi-carousel-15", {
            slidesPerView: 3,
            spaceBetween: 24,
            grabcursor: true,
            speed: 600,
            loop: true,
            autoplay: true,
            grabcursor: true,
            navigation: {
                nextEl: '.testi-carousel-wrap-15 .swiper-prev',
                prevEl: '.testi-carousel-wrap-15 .swiper-next',
            },
            breakpoints: {
                0: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                },
                992: {
                    slidesPerView: 3,
                },
            },
        });
    }

    function courseFeaturesSlider() {
        var swiperCourse = new Swiper(".course-feature-carosuel", {
            slidesPerView: 4,
            spaceBetween: 24,
            slidesPerGroup: 1,
            loop: true,
            autoplay: true,
            grabcursor: true,
            speed: 600,
            navigation: {
                nextEl: ".course-feature .swiper-prev",
                prevEl: ".course-feature .swiper-next",
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    spaceBetween: 24,
                },
                767: {
                    slidesPerView: 2,
                    slidesPerGroup: 1,
                    spaceBetween: 24,
                },
                1024: {
                    slidesPerView: 3,
                    slidesPerGroup: 1,
                },
                1200: {
                    slidesPerView: 4,
                    slidesPerGroup: 1,
                },
            },
        });
        var swiperExam = new Swiper(".exam-carousel", {
            slidesPerView: 4,
            spaceBetween: 24,
            grabcursor: true,
            speed: 600,
            loop: true,
            autoplay: true,
            grabcursor: true,
            navigation: {
                nextEl: '.exam-carousel-wrap .swiper-prev',
                prevEl: '.exam-carousel-wrap .swiper-next',
            },
            breakpoints: {
                0: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                },
                992: {
                    slidesPerView: 3,
                },
                1200: {
                    slidesPerView: 4,
                }
            },
        });
    }

    function subscribeForm() {
        $("[data-background").each(function() {
            $(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");
        });
    }

    function eventSlider() {
        var swiperEvent = new Swiper(".event-carousel", {
            slidesPerView: 3,
            spaceBetween: 24,
            slidesPerGroup: 1,
            loop: true,
            autoplay: true,
            grabcursor: true,
            speed: 600,
            navigation: {
                nextEl: ".event-section .swiper-prev",
                prevEl: ".event-section .swiper-next",
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    spaceBetween: 24,
                },
                767: {
                    slidesPerView: 2,
                    slidesPerGroup: 1,
                    spaceBetween: 24,
                },
                1024: {
                    slidesPerView: 2,
                    slidesPerGroup: 1,
                },
                1200: {
                    slidesPerView: 2,
                    slidesPerGroup: 1,
                },
            },
        });
        // Event Carousel
        var swiperEvent = new Swiper(".event-carousel-20", {
            slidesPerView: 3,
            spaceBetween: 24,
            slidesPerGroup: 1,
            loop: true,
            autoplay: true,
            grabcursor: true,
            speed: 600,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    spaceBetween: 24,
                },
                767: {
                    slidesPerView: 2,
                    slidesPerGroup: 1,
                    spaceBetween: 24,
                },
                1024: {
                    slidesPerView: 2,
                    slidesPerGroup: 1,
                },
                1200: {
                    slidesPerView: 3,
                    slidesPerGroup: 1,
                },
            },
        });
    }

    function brandSlider() {
        var swiperSponsor = new Swiper(".sponsor-carousel", {
            slidesPerView: 4,
            spaceBetween: 24,
            slidesPerGroup: 1,
            loop: true,
            autoplay: false,
            grabcursor: true,
            speed: 600,
            breakpoints: {
                320: {
                    slidesPerView: 2,
                    slidesPerGroup: 1,
                    spaceBetween: 25,
                },
                767: {
                    slidesPerView: 3,
                    slidesPerGroup: 1,
                    spaceBetween: 30,
                },
                1024: {
                    slidesPerView: 4,
                    slidesPerGroup: 1,
                },
            },
        });

        var swiperSponsor = new Swiper(".sponsor-carousel-2", {
            slidesPerView: 5,
            spaceBetween: 24,
            slidesPerGroup: 1,
            loop: true,
            autoplay: false,
            grabcursor: true,
            speed: 600,
            breakpoints: {
                320: {
                    slidesPerView: 2,
                    slidesPerGroup: 1,
                    spaceBetween: 25,
                },
                767: {
                    slidesPerView: 3,
                    slidesPerGroup: 1,
                    spaceBetween: 30,
                },
                1024: {
                    slidesPerView: 5,
                    slidesPerGroup: 1,
                },
            },
        });
    }

    function ctaSection() {
        $("[data-background").each(function() {
            $(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");
        });
    }

    function counterSection() {

        $(".odometer").waypoint(
            function() {
                var odo = $(".odometer");
                odo.each(function() {
                    var countNumber = $(this).attr("data-count");
                    $(this).html(countNumber);
                });
            }, {
                offset: "80%",
                triggerOnce: true,
            }
        );
    }

    function courseSlider() {

        // Course Carousel
        var swiperCourse = new Swiper(".course-carousel", {
            slidesPerView: 3,
            spaceBetween: 24,
            slidesPerGroup: 1,
            loop: true,
            autoplay: true,
            grabcursor: true,
            speed: 600,
            navigation: {
                nextEl: ".course-section .swiper-prev",
                prevEl: ".course-section .swiper-next",
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    spaceBetween: 24,
                },
                767: {
                    slidesPerView: 2,
                    slidesPerGroup: 1,
                    spaceBetween: 24,
                },
                1024: {
                    slidesPerView: 2,
                    slidesPerGroup: 1,
                },
                1200: {
                    slidesPerView: 3,
                    slidesPerGroup: 1,
                },
            },
        });

        var swiperCourse = new Swiper(".course-carousel-2", {
            slidesPerView: 3,
            spaceBetween: 24,
            grabcursor: true,
            speed: 600,
            navigation: {
                nextEl: '.course-carousel-top .swiper-prev',
                prevEl: '.course-carousel-top .swiper-next',
            },
            breakpoints: {
                0: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                },
                992: {
                    slidesPerView: 3,
                },
                1200: {
                    slidesPerView: 3,
                }
            },
        });

        var swiperCourse = new Swiper(".course-carousel-3", {
            slidesPerView: 3,
            spaceBetween: 24,
            grabcursor: true,
            speed: 600,
            loop: true,
            autoplay: false,
            grabcursor: true,
            navigation: {
                nextEl: '.course-carousel-top .swiper-prev',
                prevEl: '.course-carousel-top .swiper-next',
            },
            breakpoints: {
                0: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                },
                992: {
                    slidesPerView: 3,
                },
                1200: {
                    slidesPerView: 3,
                }
            },
        });

        var swiperCourse = new Swiper(".course-carousel-20", {
            slidesPerView: 3,
            spaceBetween: 24,
            slidesPerGroup: 1,
            loop: true,
            autoplay: true,
            grabcursor: true,
            speed: 600,
            navigation: {
                nextEl: ".course-carousel-wrap-20 .swiper-prev",
                prevEl: ".course-carousel-wrap-20 .swiper-next",
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    spaceBetween: 24,
                },
                767: {
                    slidesPerView: 2,
                    slidesPerGroup: 1,
                    spaceBetween: 24,
                },
                1024: {
                    slidesPerView: 2,
                    slidesPerGroup: 1,
                },
                1200: {
                    slidesPerView: 3,
                    slidesPerGroup: 1,
                },
            },
        });
    }

    function serviceSlider() {

        var swiperExam = new Swiper(".lang-exam-carousel", {
            slidesPerView: 1,
            spaceBetween: 24,
            grabcursor: true,
            speed: 600,
            loop: true,
            autoplay: true,
            grabcursor: true,
            navigation: {
                nextEl: '.lang-exam-carousel-wrap .swiper-prev',
                prevEl: '.lang-exam-carousel-wrap .swiper-next',
            },
            breakpoints: {
                0: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 1,
                },
                992: {
                    slidesPerView: 1,
                },
                1200: {
                    slidesPerView: 1,
                }
            },
        });

        var swiperCourse = new Swiper(".course-carousel-4", {
            slidesPerView: 3,
            spaceBetween: 24,
            grabcursor: true,
            speed: 600,
            loop: true,
            autoplay: false,
            grabcursor: true,
            navigation: {
                nextEl: '.course-carousel-top .swiper-prev',
                prevEl: '.course-carousel-top .swiper-next',
            },
            breakpoints: {
                0: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                },
                992: {
                    slidesPerView: 3,
                },
                1200: {
                    slidesPerView: 3,
                }
            },
        });

        var swiperExplore = new Swiper(".explore-carousel", {
            slidesPerView: 3,
            spaceBetween: 24,
            grabcursor: true,
            speed: 600,
            loop: true,
            autoplay: true,
            grabcursor: true,
            navigation: {
                nextEl: '.explore-top .swiper-prev',
                prevEl: '.explore-top .swiper-next',
            },
            breakpoints: {
                0: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                },
                992: {
                    slidesPerView: 3,
                },
                1200: {
                    slidesPerView: 3,
                }
            },
        });

        var swiperService = new Swiper(".service-carousel", {
            slidesPerView: 3,
            spaceBetween: 24,
            grabcursor: true,
            speed: 600,
            loop: true,
            autoplay: true,
            grabcursor: true,
            navigation: {
                nextEl: '.service-carousel-wrap .swiper-prev',
                prevEl: '.service-carousel-wrap .swiper-next',
            },
            breakpoints: {
                0: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                },
                992: {
                    slidesPerView: 3,
                },
            },
        });
    }

    function VideoSection() {

        new VenoBox({
            selector: ".video-popup, .img-popup",
            bgcolor: "transparent",
            numeration: true,
            infinigall: true,
            spinner: "plane",
        });
    }

    function Header_Seven() {

        var swiperHeader = new Swiper(".header-carousel", {
            slidesPerView: 9,
            spaceBetween: 0,
            grabcursor: true,
            speed: 600,
            loop: true,
            autoplay: false,
            grabcursor: true,
            navigation: {
                nextEl: '.header-carousel-wrap .swiper-prev',
                prevEl: '.header-carousel-wrap .swiper-next',
            },
            breakpoints: {
                0: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 5,
                },
                992: {
                    slidesPerView: 7,
                },
                1200: {
                    slidesPerView: 9,
                }
            },
        });
    }

    function Image() {

        $(".odometer").waypoint(
            function() {
                var odo = $(".odometer");
                odo.each(function() {
                    var countNumber = $(this).attr("data-count");
                    $(this).html(countNumber);
                });
            }, {
                offset: "80%",
                triggerOnce: true,
            }
        );
    }

    $(window).on('elementor/frontend/init', function() {
        elementorFrontend.hooks.addAction('frontend/element_ready/edcare-header.default', headerLayoutOne);
        elementorFrontend.hooks.addAction('frontend/element_ready/edcare-header-2.default', headerLayoutTwo);
        elementorFrontend.hooks.addAction('frontend/element_ready/edcare-header-3.default', headerLayoutThree);
        elementorFrontend.hooks.addAction('frontend/element_ready/edcare-header-4.default', headerLayoutFour);
        elementorFrontend.hooks.addAction('frontend/element_ready/edcare-header-5.default', headerLayoutFive);
        elementorFrontend.hooks.addAction('frontend/element_ready/edcare-header-6.default', headerLayoutSix);
        elementorFrontend.hooks.addAction('frontend/element_ready/edcare_hero_banner.default', heroBanner);
        elementorFrontend.hooks.addAction('frontend/element_ready/edcare_about.default', aboutSection);
        elementorFrontend.hooks.addAction('frontend/element_ready/edcare_fun_fact.default', funFact);
        elementorFrontend.hooks.addAction('frontend/element_ready/edcare_testimonial_slider.default', testimonialSlider);
        elementorFrontend.hooks.addAction('frontend/element_ready/edcare_features_slider.default', courseFeaturesSlider);
        elementorFrontend.hooks.addAction('frontend/element_ready/edcare_subscribe_form.default', subscribeForm);
        elementorFrontend.hooks.addAction('frontend/element_ready/edcare_event_post.default', eventSlider);
        elementorFrontend.hooks.addAction('frontend/element_ready/edcare_brand_slider.default', brandSlider);
        elementorFrontend.hooks.addAction('frontend/element_ready/edcare_cta.default', ctaSection);
        elementorFrontend.hooks.addAction('frontend/element_ready/edcare_counter.default', counterSection);
        elementorFrontend.hooks.addAction('frontend/element_ready/edcare_course_slider.default', courseSlider);
        elementorFrontend.hooks.addAction('frontend/element_ready/edcare_service_slider.default', serviceSlider);
        elementorFrontend.hooks.addAction('frontend/element_ready/edcare_video.default', VideoSection);
        elementorFrontend.hooks.addAction('frontend/element_ready/edcare_header_7.default', Header_Seven);
        elementorFrontend.hooks.addAction('frontend/element_ready/edcare_image.default', Image);
    });

})(jQuery);