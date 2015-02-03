$(document).ready(function() {
  // This will select all section list items and we want to be more specific
  // $("section li:first-child").css('background-color', 'steelblue');
  
  // This is more specific 
  $("#important-events li:first-child").css('background-color', 'steelblue');
  $("#unimportant-events").hide();
  $("#important-events").find("span").css("color", "yellow").css("font-size", "3em");
});