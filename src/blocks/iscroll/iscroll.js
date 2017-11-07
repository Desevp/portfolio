var pageScroll;

window.onload = function() {

    var delay = 200;

    var optionsScroll = {
        scrollbars: true,
        mouseWheel: true,
        interactiveScrollbars: true,
        scrollbars: 'custom',
        snap: '.screen',
        bounce: true,
        click: true,
        disableMouse: false,
        disablePointer: true,
        disableTouch: false,
        preventDefault: false,
        blockMomentum: true,
        snapSpeed: 600
    }

    setTimeout(function() {
        pageScroll = new IScroll('.iscroll', optionsScroll);
        // console.dir(myScroll.options);
    }, delay);
}
