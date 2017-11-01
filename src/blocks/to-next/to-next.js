$( document ).ready(function() {
    $("#toNext").click(function() {
        $('html, body').animate({
            scrollTop: $(".project-screen").offset().top
        }, 1500);
    });
});
