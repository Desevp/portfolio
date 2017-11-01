
var swipeDevice = function () {
    var swipeContent = $('.swipe-devices');
    var contentItem = '.swipe-devices__item';
    var contentItemActive = 'swipe-devices__item_is-active';
    var switchItem = '.swipe-devices__switch-item';
    var switchItemActive = 'swipe-devices__switch-item_is-active';


    swipeContent.swipe({
        swipe: function (event, direction) {

            var current2 = this.find('.'+ contentItemActive).index();
            toggleImage(current2, direction);
        },
        threshold: 0

    });

    function toggleImage(current, direction) {

        $(contentItem).each(function (){
            $(this).removeClass(contentItemActive);
        });

        $(switchItem).each(function (){
            $(this).removeClass(switchItemActive);
        });

        if (direction === "right"){
            current++;
            if (current > ($(contentItem).length - 1)) {
                current = 0;
            }
        }

        if (direction === "left") {
            current--;
            if (current > ($(contentItem).length - 1)) {
                current = $(contentItem).length - 1;
            }
        }

        $(contentItem).eq(current).addClass(contentItemActive);
        $(switchItem).eq(current).addClass(switchItemActive);
    }

    $(switchItem).on('mouseenter touchstart', function () {
        var current = $(this).index();
        toggleImage(current);
    });

} ();
