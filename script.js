$(document).ready(function () {
    $('#countdown').countdown('2024/06/01', function (event) {
        $(this).html(event.strftime(
            '<div><span class="number">%w</span> <span class="unit">Weeks</span></div> ' +
            '<div><span class="number">%d</span> <span class="unit">Days</span></div> ' +
            '<div><span class="number">%H</span> <span class="unit">Hours</span></div> ' +
            '<div><span class="number">%M</span> <span class="unit">Minutes</span></div> ' +
            '<div><span class="number">%S</span> <span class="unit">Seconds</span></div>'
        ));

        // Adding animation only to the changing numbers
        $('.number').addClass('fadeInNumber');
        $('.contact-btn').addClass('fadeInNumber');
    });
});
