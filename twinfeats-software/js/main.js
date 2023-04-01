$(function() { 
    //select all nav links and respond to their click
    $("nav > a").click(function () {
        // the code that will execute when a nav link is clicked
        // $(this ) means the element which was clickerd from above,
        // in our case which link was clicked, We use the jQuery function 
        // attr to get the indicated attribute
        let target = $(this).attr("href");
        //    let target = $(this).attr("href", "www.google.com")
        // find the element current with the show class, then remove
        // that class so that it hides 
        $(".show").removeClass("show");
        //take the target page we captured aboce and add the show class 
        // so that it slides into view 
        $(target).addClass("show");
    })
})