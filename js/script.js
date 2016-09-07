$(document).ready(function() {

    $(".img-wrapper").mouseenter(function () {
        $(this).find("img").addClass("on");
        $(this).find(".btn").removeClass("hidden");

    })
    .mouseleave(function () {
        $(this).find("img").removeClass("on");
        $(this).find(".btn").addClass("hidden");
    });



});