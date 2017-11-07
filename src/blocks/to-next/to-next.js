$( document ).ready(function() {
    $( "#toNext" ).click(function() {
        pageScroll.goToPage(0, 1, 600, IScroll.utils.ease.quadratic);
    });
});
