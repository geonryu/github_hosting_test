function animateFrom(elem, direction) {
    direction = direction | 1;

    var x = 0,
        y = direction * 100;
    if (elem.classList.contains("t_content")) {
        x = -100;
        y = 0;
    } else if (elem.classList.contains("img_content")) {
        x = 100;
        y = 0;
    }
    gsap.fromTo(elem, {
        x: x,
        y: y,
        autoAlpha: 0
    }, {
        duration: 1.25,
        x: 0,
        y: 0,
        autoAlpha: 1,
        ease: "expo",
        overwrite: "auto"
    });
}

function hide(elem) {
    gsap.set(elem, {
        autoAlpha: 0
    });
}

$(document).ready(function() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".s5 figure > div").forEach(function (elem) {
        console.log(elem);
        hide(elem);

        ScrollTrigger.create({
            trigger: elem,
            markers: true,
            onEnter: function () {
                animateFrom(elem)
            },
            onEnterBack: function () {
                animateFrom(elem, -1)
            },
            onLeave: function () {
                hide(elem)
            }
        });
    });
})