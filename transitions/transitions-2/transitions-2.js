$(function() {
    $("#move").click(function() {
        $("#block1").toggleClass("move");
    // toggleClass only applies to classes
    });
    $("#size").click(function() {
        $("#block1").toggleClass("size");
    });
    $("#opacity").click(function() {
        $("#block1").toggleClass("opacity");
    })
    $("#color").click(function() { 
        $("#block1").toggleClass("color");
    });
});