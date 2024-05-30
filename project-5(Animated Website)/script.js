const page1Animation = () => {
    let tl = gsap.timeline();
    tl.from("nav h4, nav button,nav h1", {
        y: -50,
        opacity: 0,
        duration: 0.7,
        delay: 0.5,
        stagger: 0.1
    })
    tl.from(".center-p-1 h1", {
        x: -200,
        opacity: 0,
        duration: 0.5,
    }, "-=0.2")
    tl.from(".center-p-1 p", {
        x: -100,
        opacity: 0,
        duration: 0.4,
    })
    tl.from(".center-p-1 button", {
        opacity: 0,
        duration: 1,
    })
    tl.from(".center-p-2 img", {
        opacity: 0,
        duration: 0.6,
        x: 200,
    }, "-=0.8")//dey in timeline

    tl.from(".sec-1-bottom img", {
        y: 50,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1
    }, "-=0.5")
}
const page2Animation = () => {
    let tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".services h3",
            scroller: "body",
            end: "top 0",
            delay: 0.5,
            start: "top 70%",
            scrub: 2,
        }
    });
    tl2.from(".services", {
        opacity: 0,
        duration: 0.6,
        y: 30,
    })
    tl2.from(".a", {
        opacity: 0,
        duration: 0.7,
        x: -200,
    }, "anime")
    tl2.from(".b", {
        opacity: 0,
        duration: 0.7,
        x: 200,
    }, "anime")
    tl2.from(".c", {
        opacity: 0,
        duration: 0.7,
        x: -200,
    }, "anime2")
    tl2.from(".d", {
        opacity: 0,
        duration: 0.7,
        x: 200,
    }, "anime2")
    tl2.from(".e", {
        opacity: 0,
        duration: 0.7,
        x: -200,
    }, "anime3")
    tl2.from(".f", {
        opacity: 0,
        duration: 0.7,
        x: 200,
    }, "anime3")
    tl2.from(".g", {
        opacity: 0,
        duration: 0.7,
        x: -200,
    }, "anime4")
    tl2.from(".h", {
        opacity: 0,
        duration: 0.7,
        x: 200,
    }, "anime4")
}
page2Animation();
page1Animation()