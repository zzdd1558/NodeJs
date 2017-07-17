
import "./common.js";
import "../styles/sidebar.css";

var trigger = $('.hamburger'),
    overlay = $('.overlay'),
    isClosed = false;

$(function () {
    trigger.click(function () {
        hamburger_cross();
    });

    $('[data-toggle="offcanvas"]').click(function () {
        $('#wrapper').toggleClass('toggled');
    });
});

function hamburger_cross() {

    if (isClosed == true) {
        overlay.hide();
        trigger.removeClass('is-open');
        trigger.addClass('is-closed');
        isClosed = false;
    } else {
        overlay.show();
        trigger.removeClass('is-closed');
        trigger.addClass('is-open');
        isClosed = true;
    }
}