// Меняем лого wm на салатовый

// $('.top__content-logo').hover( function () {
// $('.logo-grey').css('display', 'none');
// $('.logo-green').css('display', 'block');
// });

/*карусель*/ 


var width = $(window).width();

var quant = $('.advertising div').length;

var advwidth = quant*width;

$('.advertising').width(advwidth);


$('.active').width(width)

var m = 0;

var number = 1


$('.btn-left').click( function() {
    
    if (number< quant-1) {
      m = m - width
      $('.advertising').animate({'margin-left': m},1000)
      number = number + 1
    } else {
        m = 0
        number = 1
        $('.advertising').animate({'margin-left': m},500)
    }
})

$('.btn-right').click( function() {
    
    if (number< quant-1) {
        m = m - width
        $('.advertising').animate({'margin-right': m},1000)
        number = number  + 1 
    } else {
        m = 0
        number = 1
        $('.advertising').animate({'margin-right': m},500)
    }
})



























// $.fn.swap = function (b) {
//    $(this).each(function(i){
//    var b1 = $(b)[i],
//    a2 = $(this).clone(),
//    b2 = $(b1).clone();
// $(this).replaceWith(b2);
// $(b1).replaceWith(a2);
// });
// };

// $(function() {
//   $(".btn-left").click(function(){
//   $(".js-swap1").swap($(".js-swap3"));
//   $(".js-swap3").swap($(".js-swap2"));
//   $(".js-swap2").swap($(".js-swap4"));
//   $(".js-swap4").swap($(".js-swap1"));
//   $(".js-swap1").swap($(".js-swap2"));
//   });
// });

// $(function() {
//   $(".btn-right").click(function(){
//   $(".js-swap4").swap($(".js-swap1"));
//   $(".js-swap4").swap($(".js-swap1"));
//   $(".js-swap3").swap($(".js-swap4"));
//   $(".js-swap2").swap($(".js-swap3"));
//   $(".js-swap1").swap($(".js-swap2"));
//   });
// });




// var left = 0
        
// var slide = 1




// $('.btn-left').click( function() {
   
    
//     if(slide < 4) {
//         left = left - 100%
//        slide = slide +1 
//        $('.active').animate({'margin-left': left},600)
//     }else {
//         slide = 1
//         left = 0
//         $('.active').animate({'margin-left': left},600)
//     }
// })




// $('.btn-right').click( function() {
    
//     if (slide > 1 ) {
//         left = left + 304
//        slide = slide - 1
//        $('.active').animate({'margin-left': left},500)
//     }
// })




$('.btn-right').click( function() {
    $('.active').css({'transform': 'translate(100px; 270px)'})
});