$(document).ready(function() {
    const headerLinks = $(".header ul li a");

    // Sticky header logic
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1) {
            $(".header-area").addClass("sticky");
        } else {
            $(".header-area").removeClass("sticky");
        }

        // Update the active section based on scroll position
        updateActiveSection();
    });

    // Smooth scrolling to sections
    headerLinks.click(function(e) {
        e.preventDefault();
        const target = $(this).attr("href");

        if ($(target).hasClass("active-section")) return;

        let offset = target === "#home" ? 0 : $(target).offset().top - 40;
        $("html, body").animate({ scrollTop: offset }, 500);

        headerLinks.removeClass("active");
        $(this).addClass("active");
    });

    // Function to update the active menu item on scroll
    function updateActiveSection() {
        let scrollPosition = $(window).scrollTop();

        headerLinks.each(function() {
            const section = $($(this).attr("href"));
            let sectionTop = section.offset().top - 50;
            let sectionBottom = sectionTop + section.outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                headerLinks.removeClass("active");
                $(this).addClass("active");
            }
        });
    }
});


//Initial content revealing js
ScrollReveal({
    distance: "100px",
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal(".header a, .profile-photo, .about-content, .education", {
    origin: "left"
});
ScrollReveal().reveal(".header ul, .profile-text, .about-skills, .internship", {
    origin: "right"
});
ScrollReveal().reveal(".project-title, .contact-title", {
    origin: "top"
});
ScrollReveal().reveal(".projects, .contact", {
    origin: "bottom"
});


function updateActiveSection() {
    var scrollPosition = $(window).scrollTop();

    // Checking if scroll position is at the top of the page
    if (scrollPosition === 0) {
        $(".header ul li a").removeClass("active");
        $(".header ul li a[href='#home']").addClass("active");
        return;
    }

    // Iterate through each section and update the active class in the header
    $("section").each(function() {
        var target = $(this).attr("id");
        var offset = $(this).offset().top;
        var height = $(this).outerHeight();

        if (
            scrollPosition >= offset - 40 &&
            scrollPosition < offset + height - 40
        ) {
            $(".header ul li a").removeClass("active");
            $(".header ul li a[href='#" + target + "']").addClass("active");
        }
    });
}



// contact form

function emailSend() {
    const params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        message: document.getElementById("message").value,
    };

    emailjs.send("service_mnjc2ol", "template_8pbgas5", params)
        .then(() => alert("Email sent successfully!"))
        .catch((err) => alert("Error: " + err));
}