$(document).ready(function() {
    $('#external-controls').on('click', 'div', function(event) {
        event.preventDefault();

        var target = $(this).index();
        $('#main-carousel').carousel(target);
    })
});

$(function() {
    $( '.carousel-icon-control' ).on( 'click', function() {
        $( this ).parent().find( '.active' ).removeClass( 'active' );
        $( this ).addClass( 'active' );
    });
});

$('.carousel-right-control').click(function(){
    var $next = $('.carousel-icon-control.active').removeClass('active').next('.carousel-icon-control')
    if ($next.length) {
        $next.addClass('active');
    }
    else {
        $(".carousel-icon-control:first").addClass('active');
    }
});

$('.carousel-left-control').click(function(){
    var $next = $('.carousel-icon-control.active').removeClass('active').prev('.carousel-icon-control')
    if ($next.length) {
        $next.addClass('active');
    }
    else {
        $(".carousel-icon-control:last").addClass('active');
    }
});