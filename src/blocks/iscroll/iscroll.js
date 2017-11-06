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
        var myScroll;
        myScroll = new IScroll('.iscroll', optionsScroll);
        // console.dir(myScroll.options);
    }, delay);
}

// var myScroll = new IScroll('main', {
//     // scrollbars: true,
//     mouseWheel: true,
//     bounce: true,
//     snap: 'section.screen',
//     snapSpeed: 700,
//     keyBindings: true,
//     interactiveScrollbars: true,
//     probeType: 3,
//     keyBindings: {
//         pageUp: 33,
//         pageDown: 34
//     },
//     // scrollbars: 'custom',
//     disableMouse: false,
//     disablePointer: true,
//     disableTouch: false,
//     preventDefault: false,
//     click: true
// });

// (function(){
//     var myScroll = new IScroll('#main', {
//         scrollbars: true,
//         fadeScrollbars: true
//     });
// }());
// $(document).ready(function() {
//     var myScroll;
// 	myScroll = new IScroll('.main', {
// 		scrollbars: true,
// 		mouseWheel: true,
// 		interactiveScrollbars: true,
// 		shrinkScrollbars: 'scale',
// 		fadeScrollbars: true
// 	});
//
// });
