  $(document).ready(function() {
        $("#contact").click(function(){
            $("#contact-back").css("display", "block");
        });

        $("#exit-away").click(function(){
            $("#contact-back").css("display", "none");
        });
    });

    $(document).ready(function(){
        $("#schedule").click(function(){
            $("#popup").css("display", "block");
        });
        $("#exit-button").css("display", "none");
    });