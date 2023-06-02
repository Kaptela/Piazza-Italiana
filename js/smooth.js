$(document).ready(function() {
  $(window).mousedown(function(event) {
    if (event.which === 2) {
      var documentHeight = $(document).height();
      var windowHeight = $(window).height();
      var scrollTop = $(window).scrollTop();
      var remainingHeight = documentHeight - (scrollTop + windowHeight);

      if (remainingHeight > 0) {
        $("html, body").animate(
          {
            scrollTop: scrollTop + windowHeight
          },
          800
        );
      } else {
        $("html, body").animate(
          {
            scrollTop: 0
          },
          800
        );
      }
      return false;
    }
  });
});
