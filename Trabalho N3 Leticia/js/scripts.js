$(document).ready(function () {
    $("#mobile_btn").on("click", function () {
        $("#mobile_menu").toggleClass("active");
        $("#mobile_btn").find("i").toggleClass("fa-x");
    });

    const sections = $("section");
    const navItems = $(".nav_item");

    $(window).on("scroll", function () {
        const header = $("header");
        let activeSecctionIndex = 0;
        const scrollPosition = $(window).scrollTop() - header.outerHeight();

        if (scrollPosition <= 0) {
            header.css("box-shadow", "none");
        } else {
            header.css("box-shadow", "5px 1px 5px rgba(0, 0, 0, 0.1");
        }

        sections.each(function (i) {
            const section = $(this);
            const sectionTop = section.offset().top - 96;
            const sectionBottom = sectionTop + section.outerHeight();

            if (
                scrollPosition >= sectionTop &&
                scrollPosition < sectionBottom
            ) {
                activeSecctionIndex = i;
                return false;
            }
        });

        navItems.removeClass("active");
        $(navItems[activeSecctionIndex]).addClass("active");
    });

    ScrollReveal().reveal("#cta", {
        origin: "left",
        duration: 2000,
        distance: "20%",
    });

    ScrollReveal().reveal(".row", {
        origin: "left",
        duration: 2000,
        distance: "20%",
    });

    ScrollReveal().reveal(".end", {
        origin: "left",
        duration: 2000,
        distance: "20%",
    });
});
