var pageScroll;

var delay = 100;

var optionsScroll = {
    scrollbars: true,
    mouseWheel: true,
    interactiveScrollbars: true,
    scrollbars: 'custom',
    snap: '.screen',
    bounce: false,
    click: true,
    disableMouse: false,
    disablePointer: true,
    disableTouch: false,
    preventDefault: false,
    blockMomentum: true,
    snapSpeed: 600
}

window.onload = function() {
    setTimeout(function() {
        pageScroll = new IScroll('.iscroll', optionsScroll);
        if ($(window).height() <= 560) {

            pageScroll.options.snap = false;
            setTimeout(function () {
                pageScroll.refresh();
            }, delay);
        }
    }, delay);
}

$(window).resize(function() {

    if ( ($(window).height() <= 560) && (pageScroll.options.snap != false)) {
        pageScroll.options.snap = false;
        setTimeout(function () {
            pageScroll.refresh();
        }, delay);
    }

    if ( ($(window).height() > 560) && (pageScroll.options.snap === false)){
        pageScroll.options.snap = document.querySelectorAll('.screen');
        setTimeout(function () {
            pageScroll.refresh();
        }, delay);
    }
});
