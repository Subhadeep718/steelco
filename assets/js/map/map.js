
$(document).ready(function() {
    $('.dot').hover(function() {
        var location = $(this).attr('class').split(' ')[1];
        $('.box-card').addClass('greyscale');
        $('#' + location).removeClass('greyscale').addClass('highlighted');

        // Scroll the parent div to make the highlighted box-card appear on top
        var target = $('#' + location);
        if (target.length) {
            $('.Service_text').animate({
                scrollTop: target.position().top + $('.Service_text').scrollTop() - $('.Service_text').position().top
            }, 600); // Adjust the duration as needed
        }
    }, function() {
        $('.box-card').removeClass('greyscale highlighted');
    });
});
