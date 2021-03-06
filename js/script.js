//   show desktop cart while hover to link 
$(function() {
    $(".hover-cart").mouseenter(function() {
        $('.hidden-cart').removeClass("visually-hidden");
    });
    $(".hover-cart").mouseleave(function() {
        $('.hidden-cart').addClass("visually-hidden");
    });
});

var swiper = new Swiper('.swiper-banner', {
    slidesPerView: 1,
    speed: 400,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        320: {
            spaceBetween: 10
        },
        480: {
            spaceBetween: 20
        },
        640: {
            spaceBetween: 30
        }
    },
});

var swiper = new Swiper('.promotions-swiper', {
    slidesPerView: 1,
    speed: 300,
    spaceBetween: 30,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        576: {
            slidesPerView: 1
        },
        700: {
            slidesPerView: 2,
            spaceBetween: 15
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 30
        }
    }
});

var swiper = new Swiper('.swiper-comments', {
    slidesPerView: 1,
    speed: 300,
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 0
        },
        480: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30
        }
    },
});

// forms validation
(function() {
    'use strict'

    var forms = document.querySelectorAll('.needs-validation')

    Array.prototype.slice.call(forms)
        .forEach(function(form) {
            form.addEventListener('submit', function(event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})()