var sum = 0;
var userName = $("#name").val();
$(function() {
  
  $("#start-btn").click(function(event) {
    var userName = $("#name").val();
    event.preventDefault();
    console.log(userName);
    if(userName.length === 0) {
      $("#no-name").text("Please enter your name");
      $("#name").addClass("enter-name");
    } else {
      $("#form1").show();
      $("#intro").hide();
    }
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

$(document).ready(function() {
  $("#submit").click(function() {
    var names = ["js", "year", "framework","function","dom","link"];
    names.forEach(function(name) {
      var userValue = $("input:radio[name=" + name + "]:checked").val();
      if(userValue === "10") {
        sum+=10;
      }
    });
    var userName = $("#name").val();
    $(".name-display").text(userName);
    $(".scoreDisplay").text(sum + "/60");
  });
});