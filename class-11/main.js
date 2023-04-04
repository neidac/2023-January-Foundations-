$(function() {
    $("#mobile-nav").click(function(){
        // can only click on the menu if it is visible, which means mobile
        // show the nav bar
        $("nav").addClass("mobile-nav-show");
    });
    $("nav > a").click(function() {
        // when you click a nav link, hide the nav bar
        $("nav").removeClass("mobile-nav-show");
    });
});