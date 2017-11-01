
(function(){
    $(".swipe-devices").swipe( {
            swipe:function(event, direction, distance, duration, fingerCount, fingerData) {

                var activeClass = 'swipe-devices__item_is-active';


                var img_active=$(this).children('.'+activeClass);

                var num_img=img_active.index();

                var d_pr=$(this).attr('data-project');

               $('.swipe-devices [data-project= ' + d_pr + ' ] .device-icon').eq(num_img).removeClass('is-active');


                if (num_img===$(this).children.length) {
                    num_img=-1;
                }

                img_active.removeClass(activeClass);

                if (direction==="right"){
                    $(this).children().eq(num_img-1).addClass(activeClass);
                    $('.swipe-devices [data-project= ' + d_pr + ' ] .device-icon').eq(num_img-1).addClass(activeClass);
                }
                else{
                    $(this).children().eq(num_img+1).addClass(activeClass);
                    $('.swipe-devices [data-project= ' + d_pr + ' ] .device-icon').eq(num_img+1).addClass(activeClass);
                }
            },
            threshold:0
        });
}());
