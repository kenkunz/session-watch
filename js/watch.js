jQuery(function($){

  var currentSession = $.cookie("session");
  var timer = setInterval(function() {
    if (currentSession !== $.cookie("session")) {
      clearInterval(timer);

      $.magnificPopup.open({
        modal: true,
        items: { src: '#popup' }
      });

    }
  }, 100);



  $("#session-key").val(currentSession);

  $("#session-form").submit(function(e) {
    e.preventDefault();
    currentSession = $("#session-key").val();
    $.cookie("session", currentSession);
  });


});
