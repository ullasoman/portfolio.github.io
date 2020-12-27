/* Preloader  */
    (function ($) {
        "use strict";
        
            function loading() {
                "use strict";
                $('.loading').delay(500).fadeOut(500);
            }
    // Window on Load
    $(window).on("load", function () {
        "use strict";
        loading();

    });
})(jQuery);

//********  fixed menu on scroll for desktop ************//

if ($(window).width() > 992) {
    $(window).scroll(function(){  
       if ($(this).scrollTop() > 40) {
          $('#navbar_top').addClass("fixed-top");
          // add padding top to show content behind navbar
          $('body').css('padding-top', $('.navbar').outerHeight() + 'px');
        }else{
          $('#navbar_top').removeClass("fixed-top");
           // remove padding top from body
          $('body').css('padding-top', '0');
        }   
    });
  } // end if