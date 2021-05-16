$(function() {
    $(".toggle").on("click", function() {
        if ($(".link").hasClass("active")) {
            $(".link").removeClass("active");
            $(this).find("a").html("<i class='fas fa-bars'></i>");
        } else {
            $(".link").addClass("active");
            $(this).find("a").html("<i class='fas fa-times'></i>");
        }
    });
});