$(document).ready(function() {
    var scrollTo,
        winHeight,
        winWidth,
        scrollEnds,
        listSize,
        textSize;
    function measure() {
        winHeight = window.innerHeight;
        winWidth = window.innerWidth;
        scrollTo = $("section.s2").offset().top;
        scrollEnds = $(".s1 .m_bnr").offset().top + winHeight / 2;
        listSize = 3000;//$(".s3 .list").width();??
        textSize = $(".s3 p").width();
    }
    
    measure();

    $(window).on("resize",measure);

    var scr;
    var parallCount = 0;

    $(window).on("mousewheel", function(e,d) {
        if(scr >= scrollTo){//section2에 도달했을 때,
            console.log(d);
            if(d>0){
                $("header").addClass("show");
            } else if(d<0){
                $("header").removeClass("show");
            }
        } else if (scr < scrollTo){
            $("header").removeClass("show")
        }

        if(scr >= scrollEnds){
            $(".m_bnr .story").stop().fadeIn(400);
            $(".m_bnr .b_icon").stop().fadeIn(400);
        } else {
            $(".m_bnr .story").stop().fadeOut(200);
            $(".m_bnr .b_icon").stop().fadeOut(200);
        }

    })

    gsap.to(".main-visual",{
        scrollTrigger: {
            trigger: ".main-visual",
            start: "top top",
            end: `${scrollTo - winHeight + 200} top`,
            pin: true,
            pinSpacing: false,
            // markers: true,
        }
    });

    gsap.to(".main-visual-txt", {
        scrollTrigger: {
            trigger: ".main-visual-txt",
            start: "50% top",
            end: "600% top",
            pinSpacing: false,
            scrub: true,
            // markers: true
        },
        scale: 0.5,
        opacity: 0
    });

    gsap.to(".s1 .content", {
        scrollTrigger: {
            trigger: ".s1 .content",
            start: "0 top",
            end: `${scrollTo - winHeight} top`,
            // markers: true,
            scrub: true
        },
        backgroundColor : "rgba(0,0,0,1)"
    })

    gsap.to(".m_bnr .txt-wrap", {
        scrollTrigger: {
            trigger: ".m_bnr",
            pin: true,
            pinSpacing: true,
            start: "top top",
            end: "150% top",
            // markers: true,
            scrub: true
        },
        opacity: 1
    });

    const parallaxing = gsap.timeline({
        scrollTrigger: {
            trigger: ".s1",
            start: "top top",
            end: "bottom top",
            scrub: 0.5
        }
    })

    gsap.utils.toArray(".parallax").forEach(layer=>{
        const depth = layer.dataset.depth;
        const movement = -(layer.offsetHeight * depth);
        parallaxing.to(layer, {y:movement, ease:"none"},0)
    });
 
    gsap.to(".s3",{
        scrollTrigger: {
            trigger: ".s3",
            start: "top top",
            end: "bottom top",
            pin: true,
            scrub: 0.5
        }
    })
    gsap.to(".s3 .list", {
        scrollTrigger: {
            trigger: ".s3",
            start: "top 50%",
            end: "bottom top",
            scrub: 0.5
        },
        x : winWidth + listSize
    });

    gsap.to(".s3 p", {
        scrollTrigger: {
            trigger: ".s3",
            start: "top 50%",
            end: "bottom top",
            scrub: 0.5,
            
        },
        x : -winWidth - textSize
    });

    
    gsap.utils.toArray(".s4 figure > p").forEach(item=>{
        gsap.to(item, {
            scrollTrigger: {
                trigger: item.parentNode,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
                // markers: true
            },
            x: "0",
            opacity: 1
        });
    });
})