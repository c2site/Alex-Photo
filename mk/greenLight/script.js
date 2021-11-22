$("document").ready(function () {

    $(".nav-about").on("click", function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".nav-about").offset().top-100
        }, 400);
        setTimeout(function () {
            if ($('#for-who').hasClass("active")) {
                $('.nav-about li:nth-child(1)').attr("class", "active");
                $('.nav-about li:nth-child(2)').attr("class", "");
            } else {
                $('.nav-about li:nth-child(2)').attr("class", "active");
                $('.nav-about li:nth-child(1)').attr("class", "")
            }
        }, 300)
    });
    setInterval(function () {
        AOS.refreshHard();
    }, 1000);

    // $(".about-video").click(function () {
    //     if ($(".about-video__img").css("opacity") == 1) {
    //         $(".about-video iframe").css("z-index", 100);
    //         $(".about-video iframe").click();
    //         console.log(1);
    //     } else {
    //
    //     }
    // })
});