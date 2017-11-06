
var swipeDevice = function (project) {
    var swipeContent = project.find('.swipe-devices');
    console.log(swipeContent);
    var contentItem = project.find('.swipe-devices__item');
    console.log(contentItem);
    var contentItemActive = 'swipe-devices__item_is-active';
    var switchItem = project.find('.swipe-devices__switch-item');
    console.log(switchItem);
    var switchItemActive = 'swipe-devices__switch-item_is-active';

    swipeContent.swipe({
        swipe: function (event, direction) {
            console.log('test');
            var current = this.find('.'+ contentItemActive).index();
            console.log(current);
            toggleImage(current, direction);
        },
        threshold: 0
    });

    function toggleImage(current, direction) {

        contentItem.each(function (){
            $(this).removeClass(contentItemActive);
        });

        switchItem.each(function (){
            $(this).removeClass(switchItemActive);
        });

        if (direction === "right"){
            current++;
            if (current > (contentItem.length - 1)) {
                current = 0;
            }
        }

        if (direction === "left") {
            current--;
            if (current > (contentItem.length - 1)) {
                current = contentItem.length - 1;
            }
        }

        contentItem.eq(current).addClass(contentItemActive);
        switchItem.eq(current).addClass(switchItemActive);
    }

    switchItem.on('mouseenter touchstart', function () {
        var current = $(this).index();
        toggleImage(current);
    });
};

$('.project-screen').each(function(){
    swipeDevice($(this));
});
