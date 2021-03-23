$(document).ready(function() {
  $("#calculate").click(function() {
    /* Get the text field */
    var batter_required = $("#batchInput").val();

    var butter = 165;
    var flour = 165;
    var sugar = 75;
    var egg = 4;
    var salt = 0.25;

    var new_butter = butter * batter_required;
    var new_flour = flour * batter_required;
    var new_sugar = sugar * batter_required;
    var new_egg = egg * batter_required;
    var new_salt = salt * batter_required;

    $("#butter").html(new_butter);
    $("#flour").html(new_flour);
    $("#sugar").html(new_sugar);
    $("#egg").html(new_egg);
    $("#salt").html(new_salt);

  });
});
