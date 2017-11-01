$( document ).ready(function() {
    $("#toNext").click(function() {
        $('html, body').animate({
            scrollTop: $("#firstProject").offset().top
        }, 1500);
    });
});
