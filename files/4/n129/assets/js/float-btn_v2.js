$(function() {
  $(window).on("scroll", function() {
    if ($(this).scrollTop() > 200) {
      $(".fc-float").fadeIn(400);
      } else {
      $(".fc-float").fadeOut(400);
    }

    const scrollHeight = $(document).height();
    const scrollPosition = $(window).height() + $(window).scrollTop();
    const footHeight = $("footer").height();

    // if ( scrollHeight - scrollPosition  <= footHeight - 125 ) {
    //   if(window.matchMedia("(max-width: 768px)").matches){
    //     $(".fc-float").css({
    //       "position":"absolute",
    //       "bottom": 15  + footHeight - 125,
    //     });
    //   }else{ 
    //     $(".fc-float").css({
    //       "position":"absolute",
    //       "bottom": 35  + footHeight,
    //     });
    //   }
    // } else {
    //   if(window.matchMedia("(max-width: 768px)").matches){
    //     $(".fc-float").css({
    //       "position":"fixed",
    //       "bottom": "15px",
    //     });
    //   }else{ 
    //     $(".fc-float").css({
    //       "position":"fixed",
    //       "bottom": "35px",
    //     });
    //   }
    // }

    if(window.matchMedia("(max-width: 768px)").matches){
      if ( scrollHeight - scrollPosition  <= footHeight - 120 ) {
        $(".fc-float").css({
          "position":"absolute",
          "bottom": 15  + footHeight - 120,
        });
      } else {
        $(".fc-float").css({
          "position":"fixed",
          "bottom": "15px",
        });
      }
    } else{ 
      if ( scrollHeight - scrollPosition  <= footHeight) {
        $(".fc-float").css({
          "position":"absolute",
          "bottom": 35  + footHeight,
        });
      } else {
        $(".fc-float").css({
          "position":"fixed",
          "bottom": "35px",
        });
      }
    }
  });
});