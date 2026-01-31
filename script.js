$(document).ready(function () {
    $(window).scroll(function () {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function () {
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
        // close mobile menu
        $('.navbar .menu').removeClass("active");
        $('.menu-btn i').removeClass("active");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Full Stack Developer", "Photographer", "Web Designer", "Video Editor"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed2 = new Typed(".typing-2", {
        strings: ["Full Stack Developer", "Creative Artist"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        nav: true,
        navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            700: {
                items: 2,
                nav: true
            },
            1100: {
                items: 3,
                nav: true
            }
        }
    });

    $('.carousel-video').owlCarousel({
        margin: 20,
        loop: true,
        nav: true,
        navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            768: {
                items: 2,
                nav: true
            },
            1100: {
                items: 2,
                nav: true
            }
        }
    });

    // Contact form AJAX submission
    $('#contact-form').submit(function (e) {
        e.preventDefault();
        var form = $(this);
        var button = form.find('button');
        var successMsg = $('#success-msg');
        var originalText = button.text();

        button.text('Sending...').prop('disabled', true);

        $.ajax({
            url: form.attr('action'),
            method: 'POST',
            data: form.serialize(),
            dataType: 'json',
            success: function () {
                button.text('Sent!').css('background', '#10b981');
                successMsg.fadeIn().delay(5000).fadeOut();
                form.trigger('reset');
                setTimeout(function () {
                    button.text(originalText).prop('disabled', false).css('background', '');
                }, 5000);
            },
            error: function () {
                button.text('Error! Try again.').css('background', '#ef4444');
                setTimeout(function () {
                    button.text(originalText).prop('disabled', false).css('background', '');
                }, 5000);
            }
        });
    });
});