window.onbeforeunload = function () {
    // window.scrollTo(0, 0);
}

$(document).ready(function() {
    const svgTarget = document.querySelector("svg");
    setTimeout(function() {
        svgTarget.classList.add("active");

    }, 100)
})

$('header .btn').on('click', function() {
    $('nav').animate({
        'left':'100%'
    });
})
          
$('nav .close').on('click', function() {
    $('nav').animate({
        'left' : '-100%'
    });
})

$(window).on('resize', function() {
    console.log($(this).width())
})