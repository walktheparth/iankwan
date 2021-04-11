$(document).ready(function() {
  $("#calculate").click(function() {
    /* Get the text field */
    var batter_required = $("#batchInput").val();
    // One batch batter receipe
    var butter = 165;
    var flour = 165;
    var sugar = 70;
    var egg = 4;
    var salt = 0.25;

    var butter_net_weight = 250;
    var flour_net_weight = 1000;
    var sugar_net_weight = 1000;
    var egg_net_weight = 10;

    // CALCULATE
    var new_butter = butter * batter_required;
    var new_flour = flour * batter_required;
    var new_sugar = sugar * batter_required;
    var new_egg = egg * batter_required;
    var new_salt = salt * batter_required;

    var new_butter_unit = Math.ceil(new_butter / butter_net_weight);
    var new_flour_unit = Math.ceil(new_flour / flour_net_weight);
    var new_sugar_unit = Math.ceil(new_sugar / sugar_net_weight);
    var new_egg_unit = Math.ceil(new_egg / egg_net_weight);

    // DISPLAY
    $("#butter").html(new_butter);
    $("#flour").html(new_flour);
    $("#sugar").html(new_sugar);
    $("#egg").html(new_egg);
    $("#salt").html(new_salt);

    $("#butterUnit").html(new_butter_unit);
    $("#flourUnit").html(new_flour_unit);
    $("#sugarUnit").html(new_sugar_unit);
    $("#eggUnit").html(new_egg_unit);

    $("#butterWeight").html(butter_net_weight);
    $("#flourWeight").html(flour_net_weight);
    $("#sugarWeight").html(sugar_net_weight);
    $("#eggWeight").html(egg_net_weight);

  });
});
