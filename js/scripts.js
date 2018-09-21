
// ######USER INTERFACE#####
$(function() {
  $("#start-btn").click(function(event) {
    event.preventDefault();
    $("#form1").show();
    $("#intro").hide();
  })
  $("#arrow-right").click(function() {
    $("#form1").hide();
    $("#form2").show();
  })
  $("#arrow-left").click(function() {
    $("#form1").show();
    $("#form2").hide();
  })
  $("#submit").click(function(event) {
    event.preventDefault();
    $("#score").show();
    $("#form2").hide();
  })
})