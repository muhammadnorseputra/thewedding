$(document).ready(function() {
    console.log(`welcome the wedding putra & ni'mah `);
    const element = $('html')[0]; // Get DOM element from jQuery collection
    $("button#open_undangan").on("click", function() {
        $("#undangan_intro").addClass('d-none');
        $("#undangan_digital").removeClass('d-none');
        $.cookie("notice-accepted", 1, {
            expires: 60 / 1440
        });
        if (screenfull.isEnabled) {
            screenfull.request(element);
        }
        audiojs.events.ready(function() {
            var as = audiojs.createAll({
                css: false,
                createPlayer: false
            });
        });
    });
    if ($.cookie("notice-accepted")) {
        $("#undangan_intro").addClass('d-none');
        $("#undangan_digital").removeClass('d-none');
    }

})